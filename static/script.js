$(document).ready(function() {
    console.log("Script loaded successfully.");

    var currentPlayer = 'X';
    var board = ['', '', '', '', '', '', '', '', ''];

    function playMove(index) {
        if (board[index] === '') {
            board[index] = currentPlayer;
            renderBoard();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
        }
    }

    function renderBoard() {
        $('#board').empty(); 
        for (var i = 0; i < 9; i++) {
            $('#board').append('<div class="cell" id="cell' + i + '"></div>');
        }
        for (var i = 0; i < 9; i++) {
            $('#cell' + i).text(board[i]);
        }
    }

    $(document).on('click', '.cell', function() {
        var index = parseInt($(this).attr('id').slice(4)); 
        console.log("Cell clicked: " + index); 
        playMove(index);
    });

    $('#reset').click(function() {
        console.log("Reset button clicked."); 
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        renderBoard();
    });

    renderBoard();
});