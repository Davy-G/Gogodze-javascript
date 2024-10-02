function f1(text) {
    document.write(`<div style='font-style: italic;'><u><b>${text}</b></u></div>`)
}

f1("oreo")

function f2(pirveli, meore) {
    return pirveli + meore;
}

f2(100)

function f3(textsize) {
    document.write(`<div style='font-size: ${textsize}px'>hello</div>`)
}

f3(30)


function f4(x) {
    document.write(`
        <table style="width:${x}px;" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f4(200)

function f5(y) {
    document.write(`
        <table style="height:${y}px;" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f5(200)

function f6(x, y) {
    document.write(`
        <table style="height:${y}px; width: ${x}px" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f6(200, 300)

function f7(color) {
    document.write(`
        <table style="background-color: ${color}" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f7("blue")

function f8(px) {
    document.write(`
        <table style="border: ${px}px black" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f8(30)

function f9(color, px, x, y) {
    document.write(`
        <table style="height: ${y}px; width: ${x}px;background-color: ${color};border: ${px}px black;" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f9("blue", 20, 100, 20)

function f10(color, px, x, y) {
    document.write(`
        <table style="height: ${y}px; width: ${x}px;background-color: ${color};border: ${px}px black;" class="my-table">
            <tr>
                <td>Row 1, Column 1</td>
                <td>Row 1, Column 2</td>
            </tr>
            <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
            </tr>
        </table>
    `);
}

f10("blue", 20, 100, 20)


function f11() {
    let i = 1
    while (i <= 10) {

        console.log(i)
        i++
    }
}

f11()

function f12(n) {
    let i = 1
    while (i < n) {

        console.log(i)
        i++
    }
}

f12(20)

function f13(m, n) {
    {
        let i = m

        while (i < n) {

            console.log(i)
            i++
        }
    }

}

f13(5, 30)

function f14(m, n) {
    if (m > n) {
        console.log("m>n")
        return
    }
    {
        let i = m

        while (i < n) {

            console.log(i)
            i++
        }
    }

}

f14(5, 30)
f14(31, 30)

function f15(sveti, striqoni) {
    document.write(`
        <table class="my-table">
        <script>
                for (let i = 0; i < ${sveti}; i++) {
                     document.write("<tr></tr>")
                     for (let j = 0; j < ${striqoni}; j++) {
                        document.write("<td>ragaca</td>")
                     }
                }
                         
        </script>
          
        </table>
    `);

}

f15(5, 30)

function f16(sveti, striqoni) {
    document.write(`
        <table class="my-table">
        <script>
                for (let i = 0; i < ${striqoni}; i++) {
                     document.write("<tr></tr>")
                     for (let j = 0; j < ${sveti}; j++) {
                        document.write("<td> striqoni "+ j +"sveti "+ i + "</td>")
                     }
                }
                         
        </script>
          
        </table>
    `);

}

f16(5, 30)

function f17(color, px, x, y, striqoni, sveti) {
    document.write(`
        <table style="height: ${y}px; width: ${x}px;background-color: ${color};border: ${px}px black;" class="my-table">
        <script>
                for (let i = 0; i < ${striqoni}; i++) {
                     document.write("<tr></tr>")
                     for (let j = 0; j < ${sveti}; j++) {
                        document.write("<td> striqoni "+ j +"sveti "+ i + "</td>")
                     }
                }
                         
        </script>
          
        </table>
    `);

}

f17("blue", 20, 100, 20, 10, 32)