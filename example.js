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