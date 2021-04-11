/**
 * EmojiPicker by csegundo
 * emoji.picker.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/EmojiPicker)
 */

$(function(){
    console.log("%c ✔ emoji.picker.js loaded succesfully! ✔","background-color:#C2D5A7;color:#000;border:1px solid #B2C596;border-radius:3px;padding:3px;");

    $.each($('input[data-emoji-picker]'), function(i, item){
        var wp = $('<div class="emoji-picker-element"></div>');
        $(item).wrap(wp).parents('.emoji-picker-element').append('<div class="picker"></div>');
    });

    $('.emoji-picker-element').on('click', '.picker', function(){
        console.log('pick one');
    });
});