/**
 * example.js is just to demonstrate how the plugin works.
 */

$(function(){
    $('button.show').click(function(){
        alert($('input[name="picker"]').val());
    });

    // Convert an input[type="text"] to an emoji selector
    $('button.convert').click(function(){
        // $('input').val($('input').val() + ' &#129409;');
        $('input').emojiPicker();
    });
});

// GET EMOJIS
// var i = 0;
// var emojis = [];
// document.querySelector('table.w3-table-all.charset-tryit tbody tr').forEach(tr => {
//     if(i > 0){
//         var j = 0;
//         tr.querySelectorAll('td').forEach(td => {
//             if(j == 1){
//                 emojis.push(td.innerHTML);
//             }
//             j++;
//         });
//     }
    
//     i++;
// });