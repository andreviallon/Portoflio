!function(o){function r(){var r=o("color_scheme")(),l,a=_.object(e,colorScheme[r].colors);_.each(t,function(r){a[r]=o(r)()}),a.border_color=Color(a.main_text_color).toCSS("rgba",.2),l=c(a),o.previewer.send("update-color-scheme-css",l)}var c=wp.template("twentysixteen-color-scheme"),e=["background_color","page_background_color","link_color","main_text_color","secondary_text_color"],t=["background_color","page_background_color","link_color","main_text_color","secondary_text_color"];o.controlConstructor.select=o.Control.extend({ready:function(){"color_scheme"===this.id&&this.setting.bind("change",function(r){var c=colorScheme[r].colors,e=c[0];o("background_color").set(e),o.control("background_color").container.find(".color-picker-hex").data("data-default-color",e).wpColorPicker("defaultColor",e),e=c[1],o("page_background_color").set(e),o.control("page_background_color").container.find(".color-picker-hex").data("data-default-color",e).wpColorPicker("defaultColor",e),e=c[2],o("link_color").set(e),o.control("link_color").container.find(".color-picker-hex").data("data-default-color",e).wpColorPicker("defaultColor",e),e=c[3],o("main_text_color").set(e),o.control("main_text_color").container.find(".color-picker-hex").data("data-default-color",e).wpColorPicker("defaultColor",e),e=c[4],o("secondary_text_color").set(e),o.control("secondary_text_color").container.find(".color-picker-hex").data("data-default-color",e).wpColorPicker("defaultColor",e)})}}),_.each(t,function(c){o(c,function(o){o.bind(r)})})}(wp.customize);