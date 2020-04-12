function edit() {
    $(this).html(`<input id=edit value=${$(this).text()}>`);
    const input = $('#edit').focus();
    const td = this;
    input.blur(function() {
        $('button').trigger('asdf');
        $('*').unbind();
        $(td).html( $(this).val());
        $('td').one('click', edit);
    });
}

$(document).ready(function () {
    $('td').one('click', edit);
 });

 function bindAlert(){
    $('button').bind('asdf', function () { alert('The cake is a lie!'); });
 }