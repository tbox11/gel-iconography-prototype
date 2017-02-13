module.exports = function(grunt) {
    grunt.config('copy', {
        main: {
            files: [
                {
                    expand: true,
                    cwd: '.',
                    flatten: true,
                    src: [
                        'node_modules/gel-iconography-assets/dist/audio-visual/set/gel-icons-audio-visual-set.svg',
                        'node_modules/gel-iconography-assets/dist/childrens/set/gel-icons-childrens-set.svg',
                        'node_modules/gel-iconography-assets/dist/controls-devices/set/gel-icons-controls-devices-set.svg',
                        'node_modules/gel-iconography-assets/dist/core/set/gel-icons-core-set.svg',
                        'node_modules/gel-iconography-assets/dist/food/set/gel-icons-food-set.svg',
                        'node_modules/gel-iconography-assets/dist/media/set/gel-icons-media-set.svg',
                        'node_modules/gel-iconography-assets/dist/platforms/set/gel-icons-platforms-set.svg',
                        'node_modules/gel-iconography-assets/dist/social/set/gel-icons-social-set.svg',
                        'node_modules/gel-iconography-assets/dist/sport/set/gel-icons-sport-set.svg',
                        'node_modules/gel-iconography-assets/dist/travel/set/gel-icons-travel-set.svg',
                        'node_modules/gel-iconography-assets/dist/weather/set/gel-icons-weather-set.svg'
                    ],
                    dest: 'assets/svg/'
                }
            ]
        }
    });
};
