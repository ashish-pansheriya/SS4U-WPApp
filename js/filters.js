angular.module("starter.filters", [])
        
        /**
         * Convert to rawHtml
         * 
         * @param {type} $sce  Strict contextual escaping
         * 
         * @returns {Function}
         */
        .filter("rawHtml", ["$sce", function ($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            };
        }])
    
        /**
         * Get short description of text
         * 
         * @returns text
         */
        .filter("getTileText", [function () {
            return function (text, letterCount) {
                if (text === '') {
                    return ' ';
                }
                var words    = text.split(' ');
                var tileText = '';
                for (i=0;i<letterCount;i++) {
                    if (words[i] !== undefined) {
                        tileText += words[i].charAt(0);
                    } else {
                        break;
                    }
                }
                return tileText;
            };
        }])
        
        /**
         * Get random title text with color
         * 
         * @returns {Function}
         */
        .filter("getRandomTileStyle", [function () {
            return function (type) {
                var Styles = new Array();
                Styles['square']   = [
                    {'background-color':'#009322'},
                    {'background-color':'#246D92'},
                    {'background-color':'#D7002E'}
                ];
                
                var styleByType = Styles[type];
                var style = styleByType[Math.floor(Math.random() * styleByType.length)];
                
                return style;
            };
        }])
    
        /**
         * Parse date string to date object
         * 
         * @returns {Function}
         */
        .filter("parseDate", function() {
            return function(date) {
                return Date.parse(date);
            };
        })
        
        /**
         * Replace image source url with http://
         * 
         * @returns image
         */
        .filter("replaceImageSrc", function() {
            return function (imageSrc) {
                if (imageSrc !== undefined && imageSrc.indexOf('http') !== 0) {
                    return imageSrc.replace(imageSrc.slice(0, imageSrc.indexOf('.')), 'http://www');
                }
                return imageSrc;
            };
        });
