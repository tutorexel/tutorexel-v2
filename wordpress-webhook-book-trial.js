/**
 * TutorExel - Book Free Trial Webhook Integration
 *
 * Add this script to your WordPress site via:
 * 1. Theme Customizer > Additional Scripts, OR
 * 2. A plugin like "Insert Headers and Footers", OR
 * 3. Add to your theme's footer.php before </body>
 *
 * Wrap in <script>...</script> tags when adding to WordPress.
 */

(function() {
  'use strict';

  // Webhook configuration
  const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/p9u7KRMWqnM4jO41Ghdo/webhook-trigger/9c41ef10-0897-43e9-b8cb-dc1f041db3ae';
  const FORM_SELECTOR = '#book-trial';
  const SUBMIT_BUTTON_SELECTOR = '#book-trial button[type="submit"], #book-trial input[type="submit"], #book-trial .book-trial-submit';

  // Track if webhook was already called (prevent duplicates)
  let webhookCalled = false;

  /**
   * Sanitize string input - remove potentially harmful characters
   */
  function sanitizeString(value) {
    if (typeof value !== 'string') return value;
    return value.trim().replace(/[<>]/g, '');
  }

  /**
   * Clean payload - remove empty values
   */
  function cleanPayload(data) {
    const cleaned = {};
    for (const [key, value] of Object.entries(data)) {
      if (value === null || value === undefined || value === '') continue;
      if (Array.isArray(value) && value.length === 0) continue;
      cleaned[key] = typeof value === 'string' ? sanitizeString(value) : value;
    }
    return cleaned;
  }

  /**
   * Get all form field values
   */
  function getFormData(form) {
    const formData = new FormData(form);
    const data = {};

    // Get all form fields
    formData.forEach((value, key) => {
      // Handle multiple values (checkboxes, multi-selects)
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    });

    // Also capture any fields that might not be in FormData
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
      const name = input.name || input.id;
      if (!name) return;

      if (input.type === 'checkbox' || input.type === 'radio') {
        if (input.checked && !data[name]) {
          data[name] = input.value || 'yes';
        }
      } else if (!data[name] && input.value) {
        data[name] = input.value;
      }
    });

    return data;
  }

  /**
   * Send data to webhook
   */
  async function sendToWebhook(formData) {
    // Prevent duplicate calls
    if (webhookCalled) {
      console.log('[BookTrial Webhook] Already called, skipping duplicate');
      return;
    }
    webhookCalled = true;

    try {
      // Clean and prepare payload
      const cleanedData = cleanPayload(formData);

      const payload = {
        ...cleanedData,
        submittedAt: new Date().toISOString(),
        source: 'tutorexel-website-book-trial',
        pageUrl: window.location.href
      };

      // Send to webhook with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        console.log('[BookTrial Webhook] Data sent successfully');
      } else {
        console.warn('[BookTrial Webhook] Response not OK:', response.status);
      }
    } catch (error) {
      // Silent fail - don't disrupt user experience
      console.warn('[BookTrial Webhook] Error (non-blocking):', error.message);
    }
  }

  /**
   * Validate form has required fields filled
   */
  function isFormValid(form) {
    const requiredFields = form.querySelectorAll('[required]');
    for (const field of requiredFields) {
      if (!field.value || !field.value.trim()) {
        return false;
      }
      // Basic email validation
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Initialize webhook integration
   */
  function init() {
    const form = document.querySelector(FORM_SELECTOR);

    if (!form) {
      // Form not found on this page - silently exit
      return;
    }

    console.log('[BookTrial Webhook] Initialized for form:', FORM_SELECTOR);

    // Listen for form submit
    form.addEventListener('submit', function(e) {
      // Don't prevent default - let existing form submission continue

      // Validate before sending to webhook
      if (!isFormValid(form)) {
        console.log('[BookTrial Webhook] Form validation failed, skipping webhook');
        return;
      }

      // Get form data and send to webhook (fire and forget)
      const formData = getFormData(form);
      sendToWebhook(formData);
    });

    // Also listen for button click as backup (some forms use JS to submit)
    const submitButtons = document.querySelectorAll(SUBMIT_BUTTON_SELECTOR);
    submitButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        // Small delay to ensure form data is captured
        setTimeout(function() {
          if (!webhookCalled && isFormValid(form)) {
            const formData = getFormData(form);
            sendToWebhook(formData);
          }
        }, 100);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Reset webhook flag if user navigates away and back (SPA behavior)
  window.addEventListener('pageshow', function() {
    webhookCalled = false;
  });

})();
