<?php
/**
 * Plugin Name: TutorExel Blog Sections
 * Plugin URI: https://www.tutorexel.com
 * Description: Adds structured blog sections matching Sanity CMS to WordPress posts.
 * Version: 1.0.0
 * Author: TutorExel
 * Author URI: https://www.tutorexel.com
 * Text Domain: tutorexel-blog-sections
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register post meta for storage.
 */
add_action('init', function () {
    register_post_meta('post', 'tx_sections', [
        'type'              => 'string',
        'description'       => __('Structured blog sections data stored as a JSON string', 'tutorexel-blog-sections'),
        'single'            => true,
        'show_in_rest'      => false,
        'sanitize_callback' => null, // Sanitized in REST and save_post hooks
        'auth_callback'     => function () {
            return current_user_can('edit_posts');
        },
    ]);
});

/**
 * Register REST field on post.
 */
add_action('rest_api_init', function () {
    register_rest_field('post', 'tx_sections', [
        'get_callback' => function ($post_arr) {
            $post_id = $post_arr['id'];
            $raw = get_post_meta($post_id, 'tx_sections', true);
            if (empty($raw)) {
                return (object)[];
            }
            $decoded = json_decode($raw, true);
            if (!is_array($decoded) || empty($decoded)) {
                return (object)[];
            }
            return $decoded;
        },
        'update_callback' => function ($value, $post, $field_name, $request) {
            if (!current_user_can('edit_post', $post->ID)) {
                return new WP_Error(
                    'rest_forbidden',
                    __('You cannot edit this post.', 'tutorexel-blog-sections'),
                    ['status' => 403]
                );
            }

            if (!is_array($value) && !is_object($value)) {
                delete_post_meta($post->ID, 'tx_sections');
                return true;
            }

            $sanitized = tutorexel_sanitize_sections_data((array)$value);
            if (empty($sanitized)) {
                delete_post_meta($post->ID, 'tx_sections');
            } else {
                $json = wp_json_encode($sanitized, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
                update_post_meta($post->ID, 'tx_sections', $json);
            }
            return true;
        },
        'schema' => [
            'description' => __('Structured blog sections data', 'tutorexel-blog-sections'),
            'type'        => 'object',
            'context'     => ['view', 'edit'],
        ],
    ]);
});

/**
 * Enqueue admin scripts and styles on post edit screen.
 */
add_action('admin_enqueue_scripts', function ($hook) {
    if (!in_array($hook, ['post.php', 'post-new.php'], true)) {
        return;
    }
    $screen = get_current_screen();
    if (!$screen || $screen->post_type !== 'post') {
        return;
    }

    wp_enqueue_media();
    wp_enqueue_style(
        'tutorexel-blog-sections-admin',
        plugins_url('assets/admin.css', __FILE__),
        [],
        '1.0.0'
    );
    wp_enqueue_script(
        'tutorexel-blog-sections-admin',
        plugins_url('assets/admin.js', __FILE__),
        ['jquery'],
        '1.0.0',
        true
    );
});

/**
 * Register meta boxes for each section.
 */
add_action('add_meta_boxes_post', function () {
    $sections = [
        'intro'          => __('Blog Section: Intro', 'tutorexel-blog-sections'),
        'numbered_cards' => __('Blog Section: Numbered Cards', 'tutorexel-blog-sections'),
        'tiles'          => __('Blog Section: Icon Tiles', 'tutorexel-blog-sections'),
        'timeline'       => __('Blog Section: Timeline', 'tutorexel-blog-sections'),
        'mid_cta'        => __('Blog Section: Mid-Article CTA', 'tutorexel-blog-sections'),
        'feature_grid'   => __('Blog Section: Feature Grid', 'tutorexel-blog-sections'),
        'quotes'         => __('Blog Section: Quotes', 'tutorexel-blog-sections'),
        'trio'           => __('Blog Section: Trio Cards', 'tutorexel-blog-sections'),
        'checklist'      => __('Blog Section: Checklist', 'tutorexel-blog-sections'),
        'end_cta'        => __('Blog Section: End CTA', 'tutorexel-blog-sections'),
    ];

    foreach ($sections as $id_suffix => $title) {
        add_meta_box(
            'tx_section_' . $id_suffix,
            $title,
            'tutorexel_render_section_metabox',
            'post',
            'normal',
            'default',
            ['section_id' => $id_suffix]
        );
    }
});

/**
 * Preset icons matching Sanity.
 */
function tutorexel_get_preset_icons() {
    return [
        'clock'    => __('Clock / Time', 'tutorexel-blog-sections'),
        'eye'      => __('Eye / Vision', 'tutorexel-blog-sections'),
        'user'     => __('User / Person', 'tutorexel-blog-sections'),
        'home'     => __('Home / House', 'tutorexel-blog-sections'),
        'book'     => __('Book / Reading', 'tutorexel-blog-sections'),
        'calendar' => __('Calendar / Schedule', 'tutorexel-blog-sections'),
        'chart'    => __('Chart / Progress', 'tutorexel-blog-sections'),
        'check'    => __('Check / Success', 'tutorexel-blog-sections'),
        'star'     => __('Star / Feature', 'tutorexel-blog-sections'),
        'target'   => __('Target / Goal', 'tutorexel-blog-sections'),
        'doc'      => __('Document / Test', 'tutorexel-blog-sections'),
        'bulb'     => __('Lightbulb / Idea', 'tutorexel-blog-sections'),
        'shield'   => __('Shield / Safety', 'tutorexel-blog-sections'),
        'list'     => __('List / Outline', 'tutorexel-blog-sections'),
    ];
}

/**
 * Retrieve saved sections data for a post.
 */
function tutorexel_get_post_sections($post_id) {
    $raw = get_post_meta($post_id, 'tx_sections', true);
    if (empty($raw)) {
        return [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

/**
 * Sanitize URL or relative path.
 */
function tutorexel_sanitize_url_path($url) {
    $url = trim((string)$url);
    if ($url === '') {
        return '';
    }
    if (strpos($url, '/') === 0 || strpos($url, '#') === 0 || strpos($url, '?') === 0) {
        return sanitize_text_field($url);
    }
    return esc_url_raw($url);
}

/**
 * Render meta box for a specific section.
 */
function tutorexel_render_section_metabox($post, $callback_args) {
    static $nonce_rendered = false;
    if (!$nonce_rendered) {
        wp_nonce_field('tutorexel_save_blog_sections', 'tutorexel_blog_sections_nonce');
        echo '<input type="hidden" name="tx_sections_json" id="tx_sections_json" value="" />';
        $nonce_rendered = true;
    }

    $section_key = $callback_args['args']['section_id'];
    $all_sections = tutorexel_get_post_sections($post->ID);
    $icons = tutorexel_get_preset_icons();

    echo '<div class="tx-section-box">';

    switch ($section_key) {
        case 'intro':
            $sec = $all_sections['intro'] ?? [];
            $heading = $sec['introHeading'] ?? '';
            $text = $sec['introText'] ?? '';
            if (is_array($text)) {
                $text = wp_json_encode($text);
            }
            $pullQuote = $sec['introPullQuote'] ?? '';
            ?>
            <div class="tx-field-row">
                <label for="tx_introHeading"><?php _e('Intro Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_introHeading" data-field="introHeading" value="<?php echo esc_attr($heading); ?>" placeholder="<?php esc_attr_e('e.g. Navigating Changing Expectations', 'tutorexel-blog-sections'); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_introText"><?php _e('Intro Text (Paragraphs or content)', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_introText" data-field="introText" rows="5"><?php echo esc_textarea($text); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label for="tx_introPullQuote"><?php _e('Intro Pull Quote (Optional)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_introPullQuote" data-field="introPullQuote" value="<?php echo esc_attr($pullQuote); ?>" placeholder="<?php esc_attr_e('e.g. Can regular school hours provide all the practice your child needs?', 'tutorexel-blog-sections'); ?>" />
            </div>
            <?php
            break;

        case 'numbered_cards':
            $sec = $all_sections['numberedCards'] ?? [];
            $heading = $sec['ncHeading'] ?? '';
            $intro = $sec['ncIntro'] ?? '';
            $items = $sec['ncItems'] ?? [];
            ?>
            <div class="tx-field-row">
                <label for="tx_ncHeading"><?php _e('Numbered Cards Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_ncHeading" data-field="ncHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_ncIntro"><?php _e('Numbered Cards Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_ncIntro" data-field="ncIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Numbered Cards (Repeatable)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list">
                        <?php foreach ($items as $item):
                            $title = $item['title'] ?? '';
                            $points = $item['points'] ?? [];
                        ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Card Title', 'tutorexel-blog-sections'); ?></label>
                                    <input type="text" data-field="title" value="<?php echo esc_attr($title); ?>" />
                                </div>
                                <div class="tx-nested-points-wrapper">
                                    <label><?php _e('Bullet Points', 'tutorexel-blog-sections'); ?></label>
                                    <div class="tx-nested-points-list">
                                        <?php foreach ($points as $pt): ?>
                                            <div class="tx-nested-point-item">
                                                <input type="text" data-field="point" value="<?php echo esc_attr($pt); ?>" />
                                                <button type="button" class="button tx-move-point-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                                <button type="button" class="button tx-move-point-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                                <button type="button" class="button tx-remove-point-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                    <button type="button" class="button button-small tx-add-point-btn"><?php _e('+ Add Point', 'tutorexel-blog-sections'); ?></button>
                                    <template class="tx-point-template">
                                        <div class="tx-nested-point-item">
                                            <input type="text" data-field="point" value="" />
                                            <button type="button" class="button tx-move-point-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                            <button type="button" class="button tx-move-point-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                            <button type="button" class="button tx-remove-point-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                        </div>
                                    </template>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Card', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Card Title', 'tutorexel-blog-sections'); ?></label>
                                <input type="text" data-field="title" value="" />
                            </div>
                            <div class="tx-nested-points-wrapper">
                                <label><?php _e('Bullet Points', 'tutorexel-blog-sections'); ?></label>
                                <div class="tx-nested-points-list">
                                    <div class="tx-nested-point-item">
                                        <input type="text" data-field="point" value="" />
                                        <button type="button" class="button tx-move-point-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                        <button type="button" class="button tx-move-point-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                        <button type="button" class="button tx-remove-point-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                    </div>
                                </div>
                                <button type="button" class="button button-small tx-add-point-btn"><?php _e('+ Add Point', 'tutorexel-blog-sections'); ?></button>
                                <template class="tx-point-template">
                                    <div class="tx-nested-point-item">
                                        <input type="text" data-field="point" value="" />
                                        <button type="button" class="button tx-move-point-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                        <button type="button" class="button tx-move-point-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                        <button type="button" class="button tx-remove-point-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                    </div>
                                </template>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <?php
            break;

        case 'tiles':
            $sec = $all_sections['tiles'] ?? [];
            $heading = $sec['tilesHeading'] ?? '';
            $intro = $sec['tilesIntro'] ?? '';
            $tiles = $sec['tiles'] ?? [];
            $coTitle = $sec['tilesCalloutTitle'] ?? '';
            $coPoints = $sec['tilesCalloutPoints'] ?? [];
            ?>
            <div class="tx-field-row">
                <label for="tx_tilesHeading"><?php _e('Tiles Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_tilesHeading" data-field="tilesHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_tilesIntro"><?php _e('Tiles Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_tilesIntro" data-field="tilesIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Tiles (Icon + Title + Text)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-tiles-list">
                        <?php foreach ($tiles as $tile):
                            $curIcon = $tile['icon'] ?? 'clock';
                            $title = $tile['title'] ?? '';
                            $text = $tile['text'] ?? '';
                            $imgId = $tile['image']['id'] ?? '';
                            $imgUrl = $tile['image']['url'] ?? '';
                        ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Icon Preset', 'tutorexel-blog-sections'); ?></label>
                                    <select data-field="icon">
                                        <?php foreach ($icons as $val => $lbl): ?>
                                            <option value="<?php echo esc_attr($val); ?>" <?php selected($curIcon, $val); ?>><?php echo esc_html($lbl); ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Tile Title', 'tutorexel-blog-sections'); ?></label>
                                    <input type="text" data-field="title" value="<?php echo esc_attr($title); ?>" />
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Tile Text', 'tutorexel-blog-sections'); ?></label>
                                    <textarea data-field="text" rows="2"><?php echo esc_textarea($text); ?></textarea>
                                </div>
                                <div class="tx-image-field">
                                    <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                    <input type="hidden" class="tx-image-id" value="<?php echo esc_attr($imgId); ?>" />
                                    <input type="hidden" class="tx-image-url" value="<?php echo esc_attr($imgUrl); ?>" />
                                    <div class="tx-image-preview">
                                        <?php if ($imgUrl): ?>
                                            <img src="<?php echo esc_url($imgUrl); ?>" alt="" />
                                        <?php endif; ?>
                                    </div>
                                    <div class="tx-image-actions">
                                        <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                        <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                    </div>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Tile', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Icon Preset', 'tutorexel-blog-sections'); ?></label>
                                <select data-field="icon">
                                    <?php foreach ($icons as $val => $lbl): ?>
                                        <option value="<?php echo esc_attr($val); ?>"><?php echo esc_html($lbl); ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Tile Title', 'tutorexel-blog-sections'); ?></label>
                                <input type="text" data-field="title" value="" />
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Tile Text', 'tutorexel-blog-sections'); ?></label>
                                <textarea data-field="text" rows="2"></textarea>
                            </div>
                            <div class="tx-image-field">
                                <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                <input type="hidden" class="tx-image-id" value="" />
                                <input type="hidden" class="tx-image-url" value="" />
                                <div class="tx-image-preview"></div>
                                <div class="tx-image-actions">
                                    <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="tx-field-row">
                <label for="tx_tilesCalloutTitle"><?php _e('Callout Title (Optional)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_tilesCalloutTitle" data-field="tilesCalloutTitle" value="<?php echo esc_attr($coTitle); ?>" />
            </div>
            <div class="tx-field-row">
                <label><?php _e('Callout Points (Optional)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-callout-points-list">
                        <?php foreach ($coPoints as $pt): ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-nested-point-item">
                                    <input type="text" data-field="point" value="<?php echo esc_attr($pt); ?>" />
                                    <button type="button" class="button tx-move-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                    <button type="button" class="button tx-move-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                    <button type="button" class="button tx-remove-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Callout Point', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-nested-point-item">
                                <input type="text" data-field="point" value="" />
                                <button type="button" class="button tx-move-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                <button type="button" class="button tx-move-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                <button type="button" class="button tx-remove-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <?php
            break;

        case 'timeline':
            $sec = $all_sections['timeline'] ?? [];
            $heading = $sec['tlHeading'] ?? '';
            $intro = $sec['tlIntro'] ?? '';
            $steps = $sec['tlSteps'] ?? [];
            ?>
            <div class="tx-field-row">
                <label for="tx_tlHeading"><?php _e('Timeline Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_tlHeading" data-field="tlHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_tlIntro"><?php _e('Timeline Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_tlIntro" data-field="tlIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Timeline Steps (Repeatable)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-steps-list">
                        <?php foreach ($steps as $step):
                            $title = $step['title'] ?? '';
                            $text = $step['text'] ?? '';
                        ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Step Title', 'tutorexel-blog-sections'); ?></label>
                                    <input type="text" data-field="title" value="<?php echo esc_attr($title); ?>" />
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Step Description', 'tutorexel-blog-sections'); ?></label>
                                    <textarea data-field="text" rows="2"><?php echo esc_textarea($text); ?></textarea>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Step', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Step Title', 'tutorexel-blog-sections'); ?></label>
                                <input type="text" data-field="title" value="" />
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Step Description', 'tutorexel-blog-sections'); ?></label>
                                <textarea data-field="text" rows="2"></textarea>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <?php
            break;

        case 'mid_cta':
            $sec = $all_sections['midCta'] ?? [];
            $heading = $sec['midCtaHeading'] ?? '';
            $subtext = $sec['midCtaSubtext'] ?? '';
            $label = $sec['midCtaButtonLabel'] ?? '';
            $path = $sec['midCtaButtonPath'] ?? '';
            ?>
            <div class="tx-field-row">
                <label for="tx_midCtaHeading"><?php _e('Mid-Article CTA Heading', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_midCtaHeading" data-field="midCtaHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_midCtaSubtext"><?php _e('Mid-Article CTA Subtext', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_midCtaSubtext" data-field="midCtaSubtext" rows="2"><?php echo esc_textarea($subtext); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label for="tx_midCtaButtonLabel"><?php _e('Button Label', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_midCtaButtonLabel" data-field="midCtaButtonLabel" value="<?php echo esc_attr($label); ?>" placeholder="<?php esc_attr_e('e.g. Book Your Free Assessment', 'tutorexel-blog-sections'); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_midCtaButtonPath"><?php _e('Button Path or URL', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_midCtaButtonPath" data-field="midCtaButtonPath" value="<?php echo esc_attr($path); ?>" placeholder="<?php esc_attr_e('e.g. /free-assessment', 'tutorexel-blog-sections'); ?>" />
            </div>
            <?php
            break;

        case 'feature_grid':
            $sec = $all_sections['featureGrid'] ?? [];
            $heading = $sec['fgHeading'] ?? '';
            $intro = $sec['fgIntro'] ?? '';
            $features = $sec['features'] ?? [];
            ?>
            <div class="tx-field-row">
                <label for="tx_fgHeading"><?php _e('Feature Grid Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_fgHeading" data-field="fgHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_fgIntro"><?php _e('Feature Grid Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_fgIntro" data-field="fgIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Features (Repeatable)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-features-list">
                        <?php foreach ($features as $feat):
                            $curIcon = $feat['icon'] ?? 'doc';
                            $title = $feat['title'] ?? '';
                            $text = $feat['text'] ?? '';
                            $imgId = $feat['image']['id'] ?? '';
                            $imgUrl = $feat['image']['url'] ?? '';
                        ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Icon Preset', 'tutorexel-blog-sections'); ?></label>
                                    <select data-field="icon">
                                        <?php foreach ($icons as $val => $lbl): ?>
                                            <option value="<?php echo esc_attr($val); ?>" <?php selected($curIcon, $val); ?>><?php echo esc_html($lbl); ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Feature Title', 'tutorexel-blog-sections'); ?></label>
                                    <input type="text" data-field="title" value="<?php echo esc_attr($title); ?>" />
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Feature Description', 'tutorexel-blog-sections'); ?></label>
                                    <textarea data-field="text" rows="2"><?php echo esc_textarea($text); ?></textarea>
                                </div>
                                <div class="tx-image-field">
                                    <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                    <input type="hidden" class="tx-image-id" value="<?php echo esc_attr($imgId); ?>" />
                                    <input type="hidden" class="tx-image-url" value="<?php echo esc_attr($imgUrl); ?>" />
                                    <div class="tx-image-preview">
                                        <?php if ($imgUrl): ?>
                                            <img src="<?php echo esc_url($imgUrl); ?>" alt="" />
                                        <?php endif; ?>
                                    </div>
                                    <div class="tx-image-actions">
                                        <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                        <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                    </div>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Feature', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Icon Preset', 'tutorexel-blog-sections'); ?></label>
                                <select data-field="icon">
                                    <?php foreach ($icons as $val => $lbl): ?>
                                        <option value="<?php echo esc_attr($val); ?>"><?php echo esc_html($lbl); ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Feature Title', 'tutorexel-blog-sections'); ?></label>
                                <input type="text" data-field="title" value="" />
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Feature Description', 'tutorexel-blog-sections'); ?></label>
                                <textarea data-field="text" rows="2"></textarea>
                            </div>
                            <div class="tx-image-field">
                                <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                <input type="hidden" class="tx-image-id" value="" />
                                <input type="hidden" class="tx-image-url" value="" />
                                <div class="tx-image-preview"></div>
                                <div class="tx-image-actions">
                                    <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <?php
            break;

        case 'quotes':
            $sec = $all_sections['quotes'] ?? [];
            $heading = $sec['qHeading'] ?? '';
            $intro = $sec['qIntro'] ?? '';
            $quotes = $sec['quotes'] ?? [];
            $closing = $sec['qClosing'] ?? '';
            ?>
            <div class="tx-field-row">
                <label for="tx_qHeading"><?php _e('Quotes Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_qHeading" data-field="qHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_qIntro"><?php _e('Quotes Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_qIntro" data-field="qIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Quote Cards (Repeatable)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-quotes-list">
                        <?php foreach ($quotes as $q): ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Quote Text', 'tutorexel-blog-sections'); ?></label>
                                    <textarea data-field="quote" rows="3"><?php echo esc_textarea($q); ?></textarea>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Quote', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Quote Text', 'tutorexel-blog-sections'); ?></label>
                                <textarea data-field="quote" rows="3"></textarea>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="tx-field-row">
                <label for="tx_qClosing"><?php _e('Quotes Closing Text (Optional)', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_qClosing" data-field="qClosing" rows="2"><?php echo esc_textarea($closing); ?></textarea>
            </div>
            <?php
            break;

        case 'trio':
            $sec = $all_sections['trio'] ?? [];
            $heading = $sec['trioHeading'] ?? '';
            $intro = $sec['trioIntro'] ?? '';
            $cards = $sec['trioCards'] ?? [];
            $pullQuote = $sec['trioPullQuote'] ?? '';
            ?>
            <div class="tx-field-row">
                <label for="tx_trioHeading"><?php _e('Trio Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_trioHeading" data-field="trioHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_trioIntro"><?php _e('Trio Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_trioIntro" data-field="trioIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Trio Cards (Repeatable, 3 columns)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-cards-list">
                        <?php foreach ($cards as $card):
                            $title = $card['title'] ?? '';
                            $text = $card['text'] ?? '';
                            $imgId = $card['image']['id'] ?? '';
                            $imgUrl = $card['image']['url'] ?? '';
                        ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-field-row">
                                    <label><?php _e('Card Title', 'tutorexel-blog-sections'); ?></label>
                                    <input type="text" data-field="title" value="<?php echo esc_attr($title); ?>" />
                                </div>
                                <div class="tx-field-row">
                                    <label><?php _e('Card Text', 'tutorexel-blog-sections'); ?></label>
                                    <textarea data-field="text" rows="2"><?php echo esc_textarea($text); ?></textarea>
                                </div>
                                <div class="tx-image-field">
                                    <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                    <input type="hidden" class="tx-image-id" value="<?php echo esc_attr($imgId); ?>" />
                                    <input type="hidden" class="tx-image-url" value="<?php echo esc_attr($imgUrl); ?>" />
                                    <div class="tx-image-preview">
                                        <?php if ($imgUrl): ?>
                                            <img src="<?php echo esc_url($imgUrl); ?>" alt="" />
                                        <?php endif; ?>
                                    </div>
                                    <div class="tx-image-actions">
                                        <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                        <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                    </div>
                                </div>
                                <div class="tx-item-controls">
                                    <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Card', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-field-row">
                                <label><?php _e('Card Title', 'tutorexel-blog-sections'); ?></label>
                                <input type="text" data-field="title" value="" />
                            </div>
                            <div class="tx-field-row">
                                <label><?php _e('Card Text', 'tutorexel-blog-sections'); ?></label>
                                <textarea data-field="text" rows="2"></textarea>
                            </div>
                            <div class="tx-image-field">
                                <label><?php _e('Optional Image', 'tutorexel-blog-sections'); ?></label>
                                <input type="hidden" class="tx-image-id" value="" />
                                <input type="hidden" class="tx-image-url" value="" />
                                <div class="tx-image-preview"></div>
                                <div class="tx-image-actions">
                                    <button type="button" class="button tx-upload-image-btn"><?php _e('Select Image', 'tutorexel-blog-sections'); ?></button>
                                    <button type="button" class="button tx-remove-image-btn"><?php _e('Remove Image', 'tutorexel-blog-sections'); ?></button>
                                </div>
                            </div>
                            <div class="tx-item-controls">
                                <button type="button" class="button tx-move-up-btn"><?php _e('Move Up', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-move-down-btn"><?php _e('Move Down', 'tutorexel-blog-sections'); ?></button>
                                <button type="button" class="button tx-remove-btn"><?php _e('Remove', 'tutorexel-blog-sections'); ?></button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="tx-field-row">
                <label for="tx_trioPullQuote"><?php _e('Big Centered Pull Quote (Optional)', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_trioPullQuote" data-field="trioPullQuote" rows="2"><?php echo esc_textarea($pullQuote); ?></textarea>
            </div>
            <?php
            break;

        case 'checklist':
            $sec = $all_sections['checklist'] ?? [];
            $heading = $sec['clHeading'] ?? '';
            $intro = $sec['clIntro'] ?? '';
            $items = $sec['clItems'] ?? [];
            ?>
            <div class="tx-field-row">
                <label for="tx_clHeading"><?php _e('Checklist Section Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_clHeading" data-field="clHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_clIntro"><?php _e('Checklist Intro Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_clIntro" data-field="clIntro" rows="3"><?php echo esc_textarea($intro); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label><?php _e('Checklist Items (Repeatable)', 'tutorexel-blog-sections'); ?></label>
                <div class="tx-repeatable-wrapper">
                    <div class="tx-repeatable-list tx-checklist-list">
                        <?php foreach ($items as $item): ?>
                            <div class="tx-repeatable-item">
                                <div class="tx-nested-point-item">
                                    <input type="text" data-field="item" value="<?php echo esc_attr($item); ?>" />
                                    <button type="button" class="button tx-move-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                    <button type="button" class="button tx-move-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                    <button type="button" class="button tx-remove-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button type="button" class="button button-secondary tx-add-btn"><?php _e('+ Add Checklist Item', 'tutorexel-blog-sections'); ?></button>
                    <template class="tx-item-template">
                        <div class="tx-repeatable-item">
                            <div class="tx-nested-point-item">
                                <input type="text" data-field="item" value="" />
                                <button type="button" class="button tx-move-up-btn" title="<?php esc_attr_e('Move up', 'tutorexel-blog-sections'); ?>">&uarr;</button>
                                <button type="button" class="button tx-move-down-btn" title="<?php esc_attr_e('Move down', 'tutorexel-blog-sections'); ?>">&darr;</button>
                                <button type="button" class="button tx-remove-btn" title="<?php esc_attr_e('Remove', 'tutorexel-blog-sections'); ?>">&times;</button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <?php
            break;

        case 'end_cta':
            $sec = $all_sections['endCta'] ?? [];
            $heading = $sec['endHeading'] ?? '';
            $text = $sec['endText'] ?? '';
            $label = $sec['endButtonLabel'] ?? '';
            $path = $sec['endButtonPath'] ?? '';
            $closing = $sec['closingLine'] ?? '';
            ?>
            <div class="tx-field-row">
                <label for="tx_endHeading"><?php _e('End CTA Heading (H2)', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_endHeading" data-field="endHeading" value="<?php echo esc_attr($heading); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_endText"><?php _e('End CTA Banner Text', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_endText" data-field="endText" rows="3"><?php echo esc_textarea($text); ?></textarea>
            </div>
            <div class="tx-field-row">
                <label for="tx_endButtonLabel"><?php _e('Button Label', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_endButtonLabel" data-field="endButtonLabel" value="<?php echo esc_attr($label); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_endButtonPath"><?php _e('Button Path or URL', 'tutorexel-blog-sections'); ?></label>
                <input type="text" id="tx_endButtonPath" data-field="endButtonPath" value="<?php echo esc_attr($path); ?>" />
            </div>
            <div class="tx-field-row">
                <label for="tx_closingLine"><?php _e('Closing Sentence (Optional)', 'tutorexel-blog-sections'); ?></label>
                <textarea id="tx_closingLine" data-field="closingLine" rows="2"><?php echo esc_textarea($closing); ?></textarea>
            </div>
            <?php
            break;
    }

    echo '</div>';
}

/**
 * Save meta boxes on post save.
 */
add_action('save_post_post', function ($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!isset($_POST['tutorexel_blog_sections_nonce']) || !wp_verify_nonce($_POST['tutorexel_blog_sections_nonce'], 'tutorexel_save_blog_sections')) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $raw = null;
    if (isset($_POST['tx_sections_json']) && !empty($_POST['tx_sections_json'])) {
        $decoded = json_decode(wp_unslash($_POST['tx_sections_json']), true);
        if (is_array($decoded)) {
            $raw = $decoded;
        }
    }

    if ($raw === null && isset($_POST['tx_sections']) && is_array($_POST['tx_sections'])) {
        $raw = wp_unslash($_POST['tx_sections']);
    }

    if ($raw === null) {
        return;
    }

    $sanitized = tutorexel_sanitize_sections_data($raw);
    if (empty($sanitized)) {
        delete_post_meta($post_id, 'tx_sections');
    } else {
        $json = wp_json_encode($sanitized, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        update_post_meta($post_id, 'tx_sections', $json);
    }
}, 10, 1);

/**
 * Sanitize sections data structure.
 */
function tutorexel_sanitize_sections_data($input) {
    if (!is_array($input)) {
        return [];
    }

    $clean = [];

    // 1. Intro
    $intro_in = isset($input['intro']) && is_array($input['intro']) ? $input['intro'] : $input;
    $intro = [];
    if (!empty($intro_in['introHeading'])) {
        $intro['introHeading'] = sanitize_text_field($intro_in['introHeading']);
    }
    if (!empty($intro_in['introText'])) {
        if (is_array($intro_in['introText'])) {
            $intro['introText'] = $intro_in['introText']; // Portable text blocks
        } else {
            $intro['introText'] = wp_kses_post($intro_in['introText']);
        }
    }
    if (!empty($intro_in['introPullQuote'])) {
        $intro['introPullQuote'] = sanitize_textarea_field($intro_in['introPullQuote']);
    }
    if (!empty($intro)) {
        $clean['intro'] = $intro;
    }

    // 2. Numbered Cards
    $nc_in = isset($input['numberedCards']) && is_array($input['numberedCards']) ? $input['numberedCards'] : $input;
    $nc = [];
    if (!empty($nc_in['ncHeading'])) {
        $nc['ncHeading'] = sanitize_text_field($nc_in['ncHeading']);
    }
    if (!empty($nc_in['ncIntro'])) {
        $nc['ncIntro'] = sanitize_textarea_field($nc_in['ncIntro']);
    }
    if (!empty($nc_in['ncItems']) && is_array($nc_in['ncItems'])) {
        $items = [];
        foreach ($nc_in['ncItems'] as $item) {
            if (!is_array($item)) continue;
            $t = isset($item['title']) ? sanitize_text_field($item['title']) : '';
            $points = [];
            if (!empty($item['points']) && is_array($item['points'])) {
                foreach ($item['points'] as $pt) {
                    $pt_clean = sanitize_text_field($pt);
                    if ($pt_clean !== '') {
                        $points[] = $pt_clean;
                    }
                }
            }
            if ($t !== '' || !empty($points)) {
                $items[] = [
                    'title'  => $t,
                    'points' => $points,
                ];
            }
        }
        if (!empty($items)) {
            $nc['ncItems'] = $items;
        }
    }
    if (!empty($nc)) {
        $clean['numberedCards'] = $nc;
    }

    // 3. Tiles
    $tiles_in = isset($input['tiles']) && is_array($input['tiles']) ? $input['tiles'] : $input;
    $tiles_sec = [];
    if (!empty($tiles_in['tilesHeading'])) {
        $tiles_sec['tilesHeading'] = sanitize_text_field($tiles_in['tilesHeading']);
    }
    if (!empty($tiles_in['tilesIntro'])) {
        $tiles_sec['tilesIntro'] = sanitize_textarea_field($tiles_in['tilesIntro']);
    }
    if (!empty($tiles_in['tiles']) && is_array($tiles_in['tiles'])) {
        $tiles = [];
        foreach ($tiles_in['tiles'] as $tile) {
            if (!is_array($tile)) continue;
            $icon = isset($tile['icon']) ? sanitize_text_field($tile['icon']) : 'clock';
            $t = isset($tile['title']) ? sanitize_text_field($tile['title']) : '';
            $txt = isset($tile['text']) ? sanitize_textarea_field($tile['text']) : '';
            $item = [
                'icon'  => $icon,
                'title' => $t,
                'text'  => $txt,
            ];
            if (!empty($tile['image']) && is_array($tile['image'])) {
                $item['image'] = [
                    'id'  => absint($tile['image']['id'] ?? 0),
                    'url' => esc_url_raw($tile['image']['url'] ?? ''),
                ];
            }
            if ($t !== '' || $txt !== '') {
                $tiles[] = $item;
            }
        }
        if (!empty($tiles)) {
            $tiles_sec['tiles'] = $tiles;
        }
    }
    if (!empty($tiles_in['tilesCalloutTitle'])) {
        $tiles_sec['tilesCalloutTitle'] = sanitize_text_field($tiles_in['tilesCalloutTitle']);
    }
    if (!empty($tiles_in['tilesCalloutPoints']) && is_array($tiles_in['tilesCalloutPoints'])) {
        $pts = [];
        foreach ($tiles_in['tilesCalloutPoints'] as $pt) {
            $pt_clean = sanitize_text_field($pt);
            if ($pt_clean !== '') {
                $pts[] = $pt_clean;
            }
        }
        if (!empty($pts)) {
            $tiles_sec['tilesCalloutPoints'] = $pts;
        }
    }
    if (!empty($tiles_sec)) {
        $clean['tiles'] = $tiles_sec;
    }

    // 4. Timeline
    $tl_in = isset($input['timeline']) && is_array($input['timeline']) ? $input['timeline'] : $input;
    $tl = [];
    if (!empty($tl_in['tlHeading'])) {
        $tl['tlHeading'] = sanitize_text_field($tl_in['tlHeading']);
    }
    if (!empty($tl_in['tlIntro'])) {
        $tl['tlIntro'] = sanitize_textarea_field($tl_in['tlIntro']);
    }
    if (!empty($tl_in['tlSteps']) && is_array($tl_in['tlSteps'])) {
        $steps = [];
        foreach ($tl_in['tlSteps'] as $step) {
            if (!is_array($step)) continue;
            $t = isset($step['title']) ? sanitize_text_field($step['title']) : '';
            $txt = isset($step['text']) ? sanitize_textarea_field($step['text']) : '';
            if ($t !== '' || $txt !== '') {
                $steps[] = [
                    'title' => $t,
                    'text'  => $txt,
                ];
            }
        }
        if (!empty($steps)) {
            $tl['tlSteps'] = $steps;
        }
    }
    if (!empty($tl)) {
        $clean['timeline'] = $tl;
    }

    // 5. Mid CTA
    $mid_in = isset($input['midCta']) && is_array($input['midCta']) ? $input['midCta'] : $input;
    $mid = [];
    if (!empty($mid_in['midCtaHeading'])) {
        $mid['midCtaHeading'] = sanitize_text_field($mid_in['midCtaHeading']);
    }
    if (!empty($mid_in['midCtaSubtext'])) {
        $mid['midCtaSubtext'] = sanitize_textarea_field($mid_in['midCtaSubtext']);
    }
    if (!empty($mid_in['midCtaButtonLabel'])) {
        $mid['midCtaButtonLabel'] = sanitize_text_field($mid_in['midCtaButtonLabel']);
    }
    if (!empty($mid_in['midCtaButtonPath'])) {
        $mid['midCtaButtonPath'] = tutorexel_sanitize_url_path($mid_in['midCtaButtonPath']);
    }
    if (!empty($mid)) {
        $clean['midCta'] = $mid;
    }

    // 6. Feature Grid
    $fg_in = isset($input['featureGrid']) && is_array($input['featureGrid']) ? $input['featureGrid'] : $input;
    $fg = [];
    if (!empty($fg_in['fgHeading'])) {
        $fg['fgHeading'] = sanitize_text_field($fg_in['fgHeading']);
    }
    if (!empty($fg_in['fgIntro'])) {
        $fg['fgIntro'] = sanitize_textarea_field($fg_in['fgIntro']);
    }
    if (!empty($fg_in['features']) && is_array($fg_in['features'])) {
        $features = [];
        foreach ($fg_in['features'] as $feat) {
            if (!is_array($feat)) continue;
            $icon = isset($feat['icon']) ? sanitize_text_field($feat['icon']) : 'doc';
            $t = isset($feat['title']) ? sanitize_text_field($feat['title']) : '';
            $txt = isset($feat['text']) ? sanitize_textarea_field($feat['text']) : '';
            $item = [
                'icon'  => $icon,
                'title' => $t,
                'text'  => $txt,
            ];
            if (!empty($feat['image']) && is_array($feat['image'])) {
                $item['image'] = [
                    'id'  => absint($feat['image']['id'] ?? 0),
                    'url' => esc_url_raw($feat['image']['url'] ?? ''),
                ];
            }
            if ($t !== '' || $txt !== '') {
                $features[] = $item;
            }
        }
        if (!empty($features)) {
            $fg['features'] = $features;
        }
    }
    if (!empty($fg)) {
        $clean['featureGrid'] = $fg;
    }

    // 7. Quotes
    $q_in = isset($input['quotes']) && is_array($input['quotes']) ? $input['quotes'] : $input;
    $q_sec = [];
    if (!empty($q_in['qHeading'])) {
        $q_sec['qHeading'] = sanitize_text_field($q_in['qHeading']);
    }
    if (!empty($q_in['qIntro'])) {
        $q_sec['qIntro'] = sanitize_textarea_field($q_in['qIntro']);
    }
    if (!empty($q_in['quotes']) && is_array($q_in['quotes'])) {
        $quotes = [];
        foreach ($q_in['quotes'] as $quote) {
            if (is_string($quote)) {
                $qt = sanitize_textarea_field($quote);
                if ($qt !== '') {
                    $quotes[] = $qt;
                }
            }
        }
        if (!empty($quotes)) {
            $q_sec['quotes'] = $quotes;
        }
    }
    if (!empty($q_in['qClosing'])) {
        $q_sec['qClosing'] = sanitize_textarea_field($q_in['qClosing']);
    }
    if (!empty($q_sec)) {
        $clean['quotes'] = $q_sec;
    }

    // 8. Trio
    $trio_in = isset($input['trio']) && is_array($input['trio']) ? $input['trio'] : $input;
    $trio = [];
    if (!empty($trio_in['trioHeading'])) {
        $trio['trioHeading'] = sanitize_text_field($trio_in['trioHeading']);
    }
    if (!empty($trio_in['trioIntro'])) {
        $trio['trioIntro'] = sanitize_textarea_field($trio_in['trioIntro']);
    }
    if (!empty($trio_in['trioCards']) && is_array($trio_in['trioCards'])) {
        $cards = [];
        foreach ($trio_in['trioCards'] as $card) {
            if (!is_array($card)) continue;
            $t = isset($card['title']) ? sanitize_text_field($card['title']) : '';
            $txt = isset($card['text']) ? sanitize_textarea_field($card['text']) : '';
            $item = [
                'title' => $t,
                'text'  => $txt,
            ];
            if (!empty($card['image']) && is_array($card['image'])) {
                $item['image'] = [
                    'id'  => absint($card['image']['id'] ?? 0),
                    'url' => esc_url_raw($card['image']['url'] ?? ''),
                ];
            }
            if ($t !== '' || $txt !== '') {
                $cards[] = $item;
            }
        }
        if (!empty($cards)) {
            $trio['trioCards'] = $cards;
        }
    }
    if (!empty($trio_in['trioPullQuote'])) {
        $trio['trioPullQuote'] = sanitize_textarea_field($trio_in['trioPullQuote']);
    }
    if (!empty($trio)) {
        $clean['trio'] = $trio;
    }

    // 9. Checklist
    $cl_in = isset($input['checklist']) && is_array($input['checklist']) ? $input['checklist'] : $input;
    $cl = [];
    if (!empty($cl_in['clHeading'])) {
        $cl['clHeading'] = sanitize_text_field($cl_in['clHeading']);
    }
    if (!empty($cl_in['clIntro'])) {
        $cl['clIntro'] = sanitize_textarea_field($cl_in['clIntro']);
    }
    if (!empty($cl_in['clItems']) && is_array($cl_in['clItems'])) {
        $items = [];
        foreach ($cl_in['clItems'] as $item) {
            if (is_string($item)) {
                $clean_item = sanitize_text_field($item);
                if ($clean_item !== '') {
                    $items[] = $clean_item;
                }
            }
        }
        if (!empty($items)) {
            $cl['clItems'] = $items;
        }
    }
    if (!empty($cl)) {
        $clean['checklist'] = $cl;
    }

    // 10. End CTA
    $end_in = isset($input['endCta']) && is_array($input['endCta']) ? $input['endCta'] : $input;
    $end = [];
    if (!empty($end_in['endHeading'])) {
        $end['endHeading'] = sanitize_text_field($end_in['endHeading']);
    }
    if (!empty($end_in['endText'])) {
        $end['endText'] = sanitize_textarea_field($end_in['endText']);
    }
    if (!empty($end_in['endButtonLabel'])) {
        $end['endButtonLabel'] = sanitize_text_field($end_in['endButtonLabel']);
    }
    if (!empty($end_in['endButtonPath'])) {
        $end['endButtonPath'] = tutorexel_sanitize_url_path($end_in['endButtonPath']);
    }
    if (!empty($end_in['closingLine'])) {
        $end['closingLine'] = sanitize_textarea_field($end_in['closingLine']);
    }
    if (!empty($end)) {
        $clean['endCta'] = $end;
    }

    return $clean;
}

