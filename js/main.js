//nazwa_funkcji jest bez nawiasów!
//interval(nazwa_funkcji, czas)

$(document).ready(function () {
    //refresh();
    setInterval(refresh, 3000);
});

function refresh() {
    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        $('#sell').html(data.PLN.sell);
        $('#buy').html(data.PLN.buy);

        var currentBuyPrice = parseFloat($('#buy').html());
        var currentSellPrice = parseFloat($('#sell').html());

        if (currentBuyPrice > parseFloat(data.PLN.buy)) {
            $('#buy-arrow').removeAttr('class').addClass('fa fa-arrow-down');
        } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
            $('#buy-arrow').removeAttr('class').addClass('fa fa-arrow-up');
        }


        if (currentSellPrice > parseFloat(data.PLN.sell)) {
            $('#sell-arrow').removeAttr('class').addClass('fa fa-arrow-down');
        } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
            $('#buy-arrow').removeAttr('class').addClass('fa fa-arrow-up');
        }


        console.log('odswiezono');

    });
}
