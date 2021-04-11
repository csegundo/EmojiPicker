/**
 * EmojiPicker by csegundo
 * emoji.picker.js
 * Copyright (c) 2021 [Carlos](https://github.com/csegundo/EmojiPicker)
 */

$(function(){
    console.log("%c ✔ emoji.picker.js loaded succesfully! ✔","background-color:#C2D5A7;color:#000;border:1px solid #B2C596;border-radius:3px;padding:3px;");

    $.fn.extend({
        emojiPicker : function(){
            var $this = $(this);
    
            if($this.attr('type') === 'text' && $this.data().emojipicker){
                $this.wrap($('<div class="emoji-picker-element"></div>')).parents('.emoji-picker-element').append('<div class="picker"></div>');
                
                $this.parents('.emoji-picker-element').on('click', '.picker', function(){
                    // Mostrar selector de emojis
                    console.log('pick one');
                });

                // Capturar el click al emoji para añadirselo al input
                $this.parents('.emoji-display').on('click', '.emoji', function(){
                    $this.val($this.val() + $(this).data().value);
                });
            }
        }
    });

    // $('.emoji-picker-element').on('click', '.picker', function(){
    //     console.log('pick one');
    // });
});