/*
 * Javascript Sort and Shuffle exercise
 * coding exercise for mearsk.
 *
 * Project started on: Sunday, 28 Jun 2020.
 * Current version: 1.0.0
 *
 * Author:  Yogesh H. Mahale (https://github.com/yogesh-mahale)
 *
 * --------------------------------------------------------------------------------
 */
window.onload = function(){

    /**
     * Helper utilities for shuffle and sort
     *
     */
    let helper = {
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },
        sort: function(array, reverse) {
            const order = reverse ? -1 : 1;

            console.log('--> | Sort order reverse => ', reverse);
            array.sort((a, b) => {
                return order * parseInt(a.dataset.ranking, 10) - order * parseInt(b.dataset.ranking, 10)
            });

            return array;
        }
    };

    /**
     * Page class responsible for user interaction and event bindings etc.
     */
    class app {
        init() {
            console.log('--> | Initialized the app...');

            this.onClickShuffleBtn();
            this.onClickSortBtn();
        }
        onClickShuffleBtn = function() {
            let shuffleBtns = document.getElementsByClassName("btn-shuffle");

            for (let i = 0; i < shuffleBtns.length; i++) {

                shuffleBtns[i].addEventListener('click', function(event) {
                    console.log('--> | Shuffle btn clicked :', event.currentTarget);

                    let containers = Array.prototype.slice.call(document.getElementsByClassName("sortContent"));

                    containers.forEach(function(container) {
                        //1. Get cards items
                        let cardItems = Array.prototype.slice.call(container.getElementsByClassName('card-wrapper'));

                        //2. Remove old card
                        cardItems.forEach(function(item) {
                            item.remove();
                        });

                        //3. Shuffle the cards
                        cardItems = helper.shuffle(cardItems);

                        //4. Render the shuffled cards
                        cardItems.forEach(function(item) {
                            container.appendChild(item);
                        });
                    });
                });
            }
        };
        onClickSortBtn = function() {
            let sortBtns = document.getElementsByClassName("btn-sort");

            for (let i = 0; i < sortBtns.length; i++) {

                sortBtns[i].addEventListener('click', function(event) {

                    let containers = Array.prototype.slice.call(document.getElementsByClassName("sortContent"));
                    console.log('--> | containers ', containers);

                    containers.forEach(function(container) {
                        //1. Get cards items
                        let cardItems = Array.prototype.slice.call(container.getElementsByClassName('card-wrapper'));

                        //2. Remove old cards from html
                        cardItems.forEach(function(item) {
                            item.remove();
                        });

                        //3. Sort cards ascending order
                        cardItems = helper.sort(cardItems, false);

                        // Sort cards decending order
                        // cardItems = helper.sort(cardItems, true);

                        //4. Render the shuffled cards in html
                        cardItems.forEach(function(item) {
                            container.appendChild(item);
                        });
                    });

                });
            }
        };
    };

    // Initialized the app.
    let appInstance = new app();
    appInstance.init();
};




