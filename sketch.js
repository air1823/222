// =================================================================
// 步驟三：p5.js 繪製邏輯 (已修改)
// -----------------------------------------------------------------

function setup() { 
    // ... (你原本的 setup 程式碼保持不變) ...
    const container = select('#scoreDisplayContainer');
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 600;

    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(container); 
    canvasElement = canvas.elt; 

    gravity = createVector(0, 0.2); 
    stroke(255); 
    strokeWeight(4); 
    background(0); 

    loop(); 
}


// -----------------------------------------------------------------
// !!! 已修改的 draw() 函數 !!!
// -----------------------------------------------------------------
function draw() {
    
    // 如果是滿分模式，在背景繪製煙花動畫
    if (fullScore) {
        // *** 關鍵修改 ***
        // 我們不再需要用 JS 控制 'display'
        // CSS 會將這個畫布固定在背景
        // canvasElement.style.display = 'block'; // <-- 已刪除

        colorMode(RGB);
        
        // 繪製半透明黑色背景，製造拖尾效果
        // 這只會畫在背景畫布上
        background(0, 0, 0, 30); 
        
        // 隨機發射新的煙花
        if (random(1) < 0.05) { 
            fireworks.push(new Firework()); 
        }

        // 更新和繪製所有煙花
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();

            if (fireworks[i].done()) {
                fireworks.splice(i, 1); 
            }
        }
        
    } else {
        // 非滿分模式：清除背景畫布，隱藏煙花

        // *** 關鍵修改 ***
        // 我們不再隱藏畫布
        // canvasElement.style.display = 'none'; // <-- 已刪除
        
        // 清除上一次的煙花殘留
        fireworks = []; 
        
        // 將背景畫布清空 (設為全黑)
        // 這樣在 H5P 內容之外的區域就是黑色的
        background(0); 

        // -----------------------------------------------------------
        // !!! 關鍵修改：以下的程式碼被移除了 !!!
        //
        // 你的 H5P 內容 (iframe) 會自己顯示分數。
        // 在 '背景' 畫布上繪製文字是沒有意義的，
        // 因為 H5P 內容會擋住它。
        // -----------------------------------------------------------
        /*
        let percentage = (maxScore > 0) ? (finalScore / maxScore) * 100 : 0;
        textAlign(CENTER, CENTER);
        // ... (所有 text() 和 fill() 相關程式碼) ...
        text(`得分: ${finalScore}/${maxScore}`, width / 2, height / 2 + 50);
        */
    }
}
