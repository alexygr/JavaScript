// .chessboard{
//     display: flex;
// }

const abc = "abcdefgh"
const chessboard = document.createElement("div");
chessboard.style.display = 'flex'
b = document.querySelector('#task1');
let row;
let white;
let column;
//b.appendChild(chessboard);

// .board{
//     border: 1px solid black;
//     max - width: fit - content;
// }
const board = document.createElement("div");
board.style.border = "1px solid black";
board.style.maxWidth = "fit-content";

for (let i = 0; i < 10; i++) {
    white = (i % 2);
    row = document.createElement("div");
    row.style.display = "flex";
    if (i == 0) {
        row.style.flexDirection = "column"
        chessboard.appendChild(row);
        chessboard.appendChild(board);
    } else if (i == 9) {
        //   b.appendChild(row)
    } else {
        // .row{
        //     display: flex;
        // }
        board.appendChild(row);
    }
    for (let j = 0; j < 8; j++) {
        // .column{
        //     width: 35px;
        //     height: 35px;;
        //     box - sizing: border - box;
        // }
        column = document.createElement("div");
        column.style.width = "35px";
        column.style.height = "35px";
        column.style.boxSizing = "border-box";
        if (i == 0) {
            // .number{
            //     display: flex;
            //     justify - content: center;
            //     flex - direction: column;
            // }
            column.style.display = "flex"
            column.style.justifyContent = "center"
            column.style.flexDirection = "column"
            // .right{
            //     text - align: right;
            //     margin - right: 4px;
            // }
            const h5 = document.createElement("h5")
            h5.style.textAlign = "right"
            h5.style.margin = "4px"
            h5.textContent = Math.abs(j - 8);
            column.appendChild(h5);
        } else if (i == 9) {
            if (j == 0) {
                row.appendChild(column);
                column = document.createElement("div");
                column.style.width = "35px";
                column.style.height = "35px";
                column.style.boxSizing = "border-box";
            }
            const h5 = document.createElement("h5");
            // .center{
            //     text - align: center;
            // }
            h5.style.textAlign = "center";
            h5.textContent = abc[j];
            column.appendChild(h5);
        } else {
            if (white) {
                // .white{
                //     border: 1px solid rgb(245, 240, 193);
                //     background - color: rgb(245, 240, 193);
                // }
                column.style.border = "1px solid rgb(245, 240, 193)";
                column.style.backgroundColor = "rgb(245, 240, 193)";
                white = !white;
            } else {
                //.black{
                //     border: 1px solid rgb(56, 101, 153);
                //     background - color: rgb(56, 101, 153);
                // }
                column.style.border = "1px solid rgb(56, 101, 153)";
                column.style.backgroundColor = "rgb(56,101,153)";
                white = !white;
            }

        }
        row.appendChild(column);
    }
}

chessboard.appendChild(board)
b.appendChild(chessboard);
b.appendChild(row);
