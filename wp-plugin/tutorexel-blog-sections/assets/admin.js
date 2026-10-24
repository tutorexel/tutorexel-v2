(function () {
  'use strict';

  function initMediaUploaders() {
    document.addEventListener('click', function (e) {
      var uploadBtn = e.target.closest('.tx-upload-image-btn');
      if (uploadBtn) {
        e.preventDefault();
        var field = uploadBtn.closest('.tx-image-field');
        if (!field) return;

        var idInput = field.querySelector('.tx-image-id');
        var urlInput = field.querySelector('.tx-image-url');
        var preview = field.querySelector('.tx-image-preview');

        if (typeof wp === 'undefined' || !wp.media) {
          alert('WordPress media library is not available.');
          return;
        }

        var frame = wp.media({
          title: 'Select Image',
          button: { text: 'Use Image' },
          multiple: false,
          library: { type: 'image' },
        });

        frame.on('select', function () {
          var attachment = frame.state().get('selection').first().toJSON();
          if (idInput) idInput.value = attachment.id;
          if (urlInput) urlInput.value = attachment.url;
          if (preview) {
            preview.innerHTML = '<img src="' + attachment.url + '" alt="" style="max-width:120px;height:auto;" />';
          }
        });

        frame.open();
        return;
      }

      var removeBtn = e.target.closest('.tx-remove-image-btn');
      if (removeBtn) {
        e.preventDefault();
        var field = removeBtn.closest('.tx-image-field');
        if (!field) return;

        var idInput = field.querySelector('.tx-image-id');
        var urlInput = field.querySelector('.tx-image-url');
        var preview = field.querySelector('.tx-image-preview');

        if (idInput) idInput.value = '';
        if (urlInput) urlInput.value = '';
        if (preview) preview.innerHTML = '';
        return;
      }
    });
  }

  function initRepeatableControls() {
    document.addEventListener('click', function (e) {
      // Move up
      var moveUpBtn = e.target.closest('.tx-move-up-btn');
      if (moveUpBtn) {
        e.preventDefault();
        var item = moveUpBtn.closest('.tx-repeatable-item');
        if (item && item.previousElementSibling && item.previousElementSibling.classList.contains('tx-repeatable-item')) {
          item.parentNode.insertBefore(item, item.previousElementSibling);
        }
        return;
      }

      // Move down
      var moveDownBtn = e.target.closest('.tx-move-down-btn');
      if (moveDownBtn) {
        e.preventDefault();
        var item = moveDownBtn.closest('.tx-repeatable-item');
        if (item && item.nextElementSibling && item.nextElementSibling.classList.contains('tx-repeatable-item')) {
          item.parentNode.insertBefore(item.nextElementSibling, item);
        }
        return;
      }

      // Remove item
      var removeBtn = e.target.closest('.tx-remove-btn');
      if (removeBtn) {
        e.preventDefault();
        var item = removeBtn.closest('.tx-repeatable-item');
        if (item) {
          item.remove();
        }
        return;
      }

      // Add item
      var addBtn = e.target.closest('.tx-add-btn');
      if (addBtn) {
        e.preventDefault();
        var wrapper = addBtn.closest('.tx-repeatable-wrapper');
        if (!wrapper) return;

        var list = wrapper.querySelector('.tx-repeatable-list');
        var template = wrapper.querySelector('template.tx-item-template');
        if (list && template) {
          var clone = template.content.cloneNode(true);
          list.appendChild(clone);
        }
        return;
      }

      // Nested point: move up
      var ptUpBtn = e.target.closest('.tx-move-point-up-btn');
      if (ptUpBtn) {
        e.preventDefault();
        var ptItem = ptUpBtn.closest('.tx-nested-point-item');
        if (ptItem && ptItem.previousElementSibling && ptItem.previousElementSibling.classList.contains('tx-nested-point-item')) {
          ptItem.parentNode.insertBefore(ptItem, ptItem.previousElementSibling);
        }
        return;
      }

      // Nested point: move down
      var ptDownBtn = e.target.closest('.tx-move-point-down-btn');
      if (ptDownBtn) {
        e.preventDefault();
        var ptItem = ptDownBtn.closest('.tx-nested-point-item');
        if (ptItem && ptItem.nextElementSibling && ptItem.nextElementSibling.classList.contains('tx-nested-point-item')) {
          ptItem.parentNode.insertBefore(ptItem.nextElementSibling, ptItem);
        }
        return;
      }

      // Nested point: remove
      var ptRemoveBtn = e.target.closest('.tx-remove-point-btn');
      if (ptRemoveBtn) {
        e.preventDefault();
        var ptItem = ptRemoveBtn.closest('.tx-nested-point-item');
        if (ptItem) {
          ptItem.remove();
        }
        return;
      }

      // Nested point: add
      var ptAddBtn = e.target.closest('.tx-add-point-btn');
      if (ptAddBtn) {
        e.preventDefault();
        var ptWrapper = ptAddBtn.closest('.tx-nested-points-wrapper');
        if (!ptWrapper) return;
        var ptList = ptWrapper.querySelector('.tx-nested-points-list');
        var ptTpl = ptWrapper.querySelector('template.tx-point-template');
        if (ptList && ptTpl) {
          var clone = ptTpl.content.cloneNode(true);
          ptList.appendChild(clone);
        }
        return;
      }
    });
  }

  function serializeSections() {
    var data = {
      intro: {},
      numberedCards: {},
      tiles: {},
      timeline: {},
      midCta: {},
      featureGrid: {},
      quotes: {},
      trio: {},
      checklist: {},
      endCta: {},
    };

    // 1. Intro
    var introBox = document.getElementById('tx_section_intro');
    if (introBox) {
      var heading = introBox.querySelector('[data-field="introHeading"]');
      var text = introBox.querySelector('[data-field="introText"]');
      var pullQuote = introBox.querySelector('[data-field="introPullQuote"]');
      data.intro.introHeading = heading ? heading.value.trim() : '';
      data.intro.introText = text ? text.value.trim() : '';
      data.intro.introPullQuote = pullQuote ? pullQuote.value.trim() : '';
    }

    // 2. Numbered Cards
    var ncBox = document.getElementById('tx_section_numbered_cards');
    if (ncBox) {
      var heading = ncBox.querySelector('[data-field="ncHeading"]');
      var intro = ncBox.querySelector('[data-field="ncIntro"]');
      data.numberedCards.ncHeading = heading ? heading.value.trim() : '';
      data.numberedCards.ncIntro = intro ? intro.value.trim() : '';

      var items = [];
      var itemEls = ncBox.querySelectorAll('.tx-repeatable-list > .tx-repeatable-item');
      itemEls.forEach(function (el) {
        var t = el.querySelector('[data-field="title"]');
        var points = [];
        var ptEls = el.querySelectorAll('.tx-nested-point-item input[data-field="point"]');
        ptEls.forEach(function (pt) {
          var val = pt.value.trim();
          if (val) points.push(val);
        });
        var titleVal = t ? t.value.trim() : '';
        if (titleVal || points.length > 0) {
          items.push({ title: titleVal, points: points });
        }
      });
      data.numberedCards.ncItems = items;
    }

    // 3. Tiles
    var tilesBox = document.getElementById('tx_section_tiles');
    if (tilesBox) {
      var heading = tilesBox.querySelector('[data-field="tilesHeading"]');
      var intro = tilesBox.querySelector('[data-field="tilesIntro"]');
      var coTitle = tilesBox.querySelector('[data-field="tilesCalloutTitle"]');

      data.tiles.tilesHeading = heading ? heading.value.trim() : '';
      data.tiles.tilesIntro = intro ? intro.value.trim() : '';
      data.tiles.tilesCalloutTitle = coTitle ? coTitle.value.trim() : '';

      var tiles = [];
      var tileEls = tilesBox.querySelectorAll('.tx-tiles-list > .tx-repeatable-item');
      tileEls.forEach(function (el) {
        var iconEl = el.querySelector('[data-field="icon"]');
        var titleEl = el.querySelector('[data-field="title"]');
        var textEl = el.querySelector('[data-field="text"]');
        var imgIdEl = el.querySelector('.tx-image-id');
        var imgUrlEl = el.querySelector('.tx-image-url');

        var item = {
          icon: iconEl ? iconEl.value : 'clock',
          title: titleEl ? titleEl.value.trim() : '',
          text: textEl ? textEl.value.trim() : '',
        };
        if (imgUrlEl && imgUrlEl.value) {
          item.image = {
            id: imgIdEl ? parseInt(imgIdEl.value, 10) || 0 : 0,
            url: imgUrlEl.value.trim(),
          };
        }
        if (item.title || item.text) {
          tiles.push(item);
        }
      });
      data.tiles.tiles = tiles;

      var calloutPoints = [];
      var coEls = tilesBox.querySelectorAll('.tx-callout-points-list .tx-repeatable-item input[data-field="point"]');
      coEls.forEach(function (pt) {
        var val = pt.value.trim();
        if (val) calloutPoints.push(val);
      });
      data.tiles.tilesCalloutPoints = calloutPoints;
    }

    // 4. Timeline
    var tlBox = document.getElementById('tx_section_timeline');
    if (tlBox) {
      var heading = tlBox.querySelector('[data-field="tlHeading"]');
      var intro = tlBox.querySelector('[data-field="tlIntro"]');
      data.timeline.tlHeading = heading ? heading.value.trim() : '';
      data.timeline.tlIntro = intro ? intro.value.trim() : '';

      var steps = [];
      var stepEls = tlBox.querySelectorAll('.tx-steps-list > .tx-repeatable-item');
      stepEls.forEach(function (el) {
        var titleEl = el.querySelector('[data-field="title"]');
        var textEl = el.querySelector('[data-field="text"]');
        var titleVal = titleEl ? titleEl.value.trim() : '';
        var textVal = textEl ? textEl.value.trim() : '';
        if (titleVal || textVal) {
          steps.push({ title: titleVal, text: textVal });
        }
      });
      data.timeline.tlSteps = steps;
    }

    // 5. Mid CTA
    var midBox = document.getElementById('tx_section_mid_cta');
    if (midBox) {
      var heading = midBox.querySelector('[data-field="midCtaHeading"]');
      var subtext = midBox.querySelector('[data-field="midCtaSubtext"]');
      var label = midBox.querySelector('[data-field="midCtaButtonLabel"]');
      var path = midBox.querySelector('[data-field="midCtaButtonPath"]');
      data.midCta.midCtaHeading = heading ? heading.value.trim() : '';
      data.midCta.midCtaSubtext = subtext ? subtext.value.trim() : '';
      data.midCta.midCtaButtonLabel = label ? label.value.trim() : '';
      data.midCta.midCtaButtonPath = path ? path.value.trim() : '';
    }

    // 6. Feature Grid
    var fgBox = document.getElementById('tx_section_feature_grid');
    if (fgBox) {
      var heading = fgBox.querySelector('[data-field="fgHeading"]');
      var intro = fgBox.querySelector('[data-field="fgIntro"]');
      data.featureGrid.fgHeading = heading ? heading.value.trim() : '';
      data.featureGrid.fgIntro = intro ? intro.value.trim() : '';

      var features = [];
      var featEls = fgBox.querySelectorAll('.tx-features-list > .tx-repeatable-item');
      featEls.forEach(function (el) {
        var iconEl = el.querySelector('[data-field="icon"]');
        var titleEl = el.querySelector('[data-field="title"]');
        var textEl = el.querySelector('[data-field="text"]');
        var imgIdEl = el.querySelector('.tx-image-id');
        var imgUrlEl = el.querySelector('.tx-image-url');

        var item = {
          icon: iconEl ? iconEl.value : 'doc',
          title: titleEl ? titleEl.value.trim() : '',
          text: textEl ? textEl.value.trim() : '',
        };
        if (imgUrlEl && imgUrlEl.value) {
          item.image = {
            id: imgIdEl ? parseInt(imgIdEl.value, 10) || 0 : 0,
            url: imgUrlEl.value.trim(),
          };
        }
        if (item.title || item.text) {
          features.push(item);
        }
      });
      data.featureGrid.features = features;
    }

    // 7. Quotes
    var qBox = document.getElementById('tx_section_quotes');
    if (qBox) {
      var heading = qBox.querySelector('[data-field="qHeading"]');
      var intro = qBox.querySelector('[data-field="qIntro"]');
      var closing = qBox.querySelector('[data-field="qClosing"]');
      data.quotes.qHeading = heading ? heading.value.trim() : '';
      data.quotes.qIntro = intro ? intro.value.trim() : '';
      data.quotes.qClosing = closing ? closing.value.trim() : '';

      var quotes = [];
      var quoteEls = qBox.querySelectorAll('.tx-quotes-list .tx-repeatable-item textarea[data-field="quote"]');
      quoteEls.forEach(function (q) {
        var val = q.value.trim();
        if (val) quotes.push(val);
      });
      data.quotes.quotes = quotes;
    }

    // 8. Trio
    var trioBox = document.getElementById('tx_section_trio');
    if (trioBox) {
      var heading = trioBox.querySelector('[data-field="trioHeading"]');
      var intro = trioBox.querySelector('[data-field="trioIntro"]');
      var pullQuote = trioBox.querySelector('[data-field="trioPullQuote"]');
      data.trio.trioHeading = heading ? heading.value.trim() : '';
      data.trio.trioIntro = intro ? intro.value.trim() : '';
      data.trio.trioPullQuote = pullQuote ? pullQuote.value.trim() : '';

      var cards = [];
      var cardEls = trioBox.querySelectorAll('.tx-cards-list > .tx-repeatable-item');
      cardEls.forEach(function (el) {
        var titleEl = el.querySelector('[data-field="title"]');
        var textEl = el.querySelector('[data-field="text"]');
        var imgIdEl = el.querySelector('.tx-image-id');
        var imgUrlEl = el.querySelector('.tx-image-url');

        var item = {
          title: titleEl ? titleEl.value.trim() : '',
          text: textEl ? textEl.value.trim() : '',
        };
        if (imgUrlEl && imgUrlEl.value) {
          item.image = {
            id: imgIdEl ? parseInt(imgIdEl.value, 10) || 0 : 0,
            url: imgUrlEl.value.trim(),
          };
        }
        if (item.title || item.text) {
          cards.push(item);
        }
      });
      data.trio.trioCards = cards;
    }

    // 9. Checklist
    var clBox = document.getElementById('tx_section_checklist');
    if (clBox) {
      var heading = clBox.querySelector('[data-field="clHeading"]');
      var intro = clBox.querySelector('[data-field="clIntro"]');
      data.checklist.clHeading = heading ? heading.value.trim() : '';
      data.checklist.clIntro = intro ? intro.value.trim() : '';

      var items = [];
      var clEls = clBox.querySelectorAll('.tx-checklist-list .tx-repeatable-item input[data-field="item"]');
      clEls.forEach(function (item) {
        var val = item.value.trim();
        if (val) items.push(val);
      });
      data.checklist.clItems = items;
    }

    // 10. End CTA
    var endBox = document.getElementById('tx_section_end_cta');
    if (endBox) {
      var heading = endBox.querySelector('[data-field="endHeading"]');
      var text = endBox.querySelector('[data-field="endText"]');
      var label = endBox.querySelector('[data-field="endButtonLabel"]');
      var path = endBox.querySelector('[data-field="endButtonPath"]');
      var closing = endBox.querySelector('[data-field="closingLine"]');
      data.endCta.endHeading = heading ? heading.value.trim() : '';
      data.endCta.endText = text ? text.value.trim() : '';
      data.endCta.endButtonLabel = label ? label.value.trim() : '';
      data.endCta.endButtonPath = path ? path.value.trim() : '';
      data.endCta.closingLine = closing ? closing.value.trim() : '';
    }

    var hiddenInput = document.getElementById('tx_sections_json');
    if (hiddenInput) {
      hiddenInput.value = JSON.stringify(data);
    }
    return data;
  }

  function initFormHooks() {
    var form = document.getElementById('post');
    if (form) {
      form.addEventListener('submit', function () {
        serializeSections();
      });
    }

    // Gutenberg compatibility: Hook into data save
    if (window.wp && wp.data && wp.data.subscribe) {
      var wasSaving = false;
      wp.data.subscribe(function () {
        var editor = wp.data.select('core/editor');
        if (!editor) return;
        var isSaving = editor.isSavingPost && editor.isSavingPost();
        if (isSaving && !wasSaving) {
          serializeSections();
        }
        wasSaving = isSaving;
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMediaUploaders();
    initRepeatableControls();
    initFormHooks();
  });
})();

