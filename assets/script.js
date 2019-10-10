$(document).ready(function(){
    $('#pv').on("input", function() {
        $('.output-pv').val("£"+ addCommas(this.value) );
    }).trigger("change");
    
    $('#p').on("input", function() {
        $('.output-p').val(this.value +"%" );
    }).trigger("change");
    
    $('#pv').on('change',function(){
        var pv = $(this).val();
        var percentage = $('#p').val();
        amount = ((percentage / 100) * pv) - 499;
        if(amount < 0){
            amount = 0;
        }
        $("#v3").html("£"+addCommas(parseInt(amount)));
    });

    $('#p').on('change',function(){
        var pv = $('#pv').val();
        var percentage = $(this).val();
        amount = ((percentage / 100) * pv) - 499;
        if(amount < 0){
            amount = 0;
        }
        $("#v3").html("£"+addCommas(parseInt(amount)));
    });
    
    $('#pv').on('change',function (){
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #1274BA), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
    });
    
    $('#p').on('change',function (){
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #1274BA), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
    });
    
    function addCommas(nStr)
    {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
}); 
