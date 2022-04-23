import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// формирование элемента dropdown средствами JS
/* $('.wrap').html(
    `
    <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action-JS</a>
                <a href="#" class="dropdown-item">Baction-JS</a>
                <a href="#" class="dropdown-item">Shmaction-JS</a>
            </div>
        </div>`
);

$('.dropdown-toggle').dropdown(); */

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title (JS)',
        body: 'As Orthodox Christians around the world prepare to celebrate Easter, the Kremlin continues with its disinformation campaign, accusing Ukraine of planning provocations on the holiday.  By now, we all know Russia’s playbook. The Kremlin regularly accuses others of doing exactly what it plans to do itself.  If Russia’s leaders really cared about peace for the holidays, they would simply stop the killing and leave Ukraine.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Зберегти зміни',
                ['btn-success'],
                false,
                () => {
                    alert('Данні збережені');
                }
            ],
            [
                'Нова кнопка',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Привіт, Світ!');
                }
            ]
        ]
    }
}));




/* $('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
}); */

/* $('div').click(function() {
    console.log($(this).index());
}); */

// console.log($('button').html('Hello'));
// console.log($('div').eq(2).find('.some '));
// console.log($('.some').closest('.findm'));

// console.log($('.findme').siblings());

// $('.some').fadeOut(3000);

/* $('button').on('click', function() {
    $('.findme').fadeOut(1800);
}); */