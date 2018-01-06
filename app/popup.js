$(function() {

    // fill tbody
    $.ajax({
        url: 'https://api.litebit.eu/markets',
        dataType: "json",
        success: function(response) {
            // declare json object
            var newCoins = {};
            let lastCoins = {};
            var isChange = true;

            // get last coins
            let getLastCoins = browser.storage.local.get('coins');

            getLastCoins.then(function(item) {

                if (item.coins != undefined) {

                    lastCoins = item.coins;

                    // for each coin
                    $.each(response.result, function(key, value) {

                        if (lastCoins[value.abbr] != value.buy) {
                            // get  stock buy value
                            var tmpTrend = "down";

                            // get Trend
                            if (lastCoins[value.abbr] < value.buy) {
                                tmpTrend = "up";
                            }

                            // add row
                            var tmpImg = '<object data="./img/' + value.abbr + '.png" type="image/png"><img src="./img/' + value.abbr + '.svg" /></object>';
                            $('body table tbody').append('<tr class="' + tmpTrend + '"><td>' + tmpImg + '</td><td>' + value.name + '</td><td>' + value.abbr + '</td><td>' + value.buy + '</td><td>' + value.sell + '</td><td><i class="fa fa-play"></i></td></tr>');

                            // add coin
                            newCoins[value.abbr] = value.buy;
                        } else {
                            isChange = false;
                            return false;
                        }

                    });

                    // stock coins
                    if (isChange == true) {
                        browser.storage.local.set({ 'coins': newCoins });
                    }

                } else {

                    // first connexion, for each coin
                    $.each(response.result, function(key, value) {
                        // add row
                        var tmpImg = '<object data="./img/' + value.abbr + '.png" type="image/png"><img src="./img/' + value.abbr + '.svg" /></object>';
                        $('body table tbody').append('<tr class="up"><td>' + tmpImg + '</td><td>' + value.name + '</td><td>' + value.abbr + '</td><td>' + value.buy + '</td><td>' + value.sell + '</td><td><i class="fa fa-play"></i></td></tr>');

                        // add coin
                        newCoins[value.abbr] = value.buy;
                    });

                    // stock coins
                    browser.storage.local.remove('coins');
                    browser.storage.local.set({ 'coins': newCoins });
                }

                // resize thead
                $('thead td:nth-child(1)').width($('tbody tr:last-child td:nth-child(1)').width());
                $('thead td:nth-child(2)').width($('tbody tr:last-child td:nth-child(2)').width());
                $('thead td:nth-child(3)').width($('tbody tr:last-child td:nth-child(3)').width());
                $('thead td:nth-child(4)').width($('tbody tr:last-child td:nth-child(4)').width());
                $('thead td:nth-child(5)').width($('tbody tr:last-child td:nth-child(5)').width());

            });
        },
        error:function(xhr,status,error) {
        }
    });

});
