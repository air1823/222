// =================================================================
// 步驟一：成績數據接收與全域變數
// -----------------------------------------------------------------

let finalScore = 0; 
let maxScore = 0;
let scoreText = ""; 

// 新增：用於煙花效果的全域變數
let fullScore = false; // 標記是否獲得滿分，用於觸發煙花
let fireworks = []; // 儲存所有煙花物件的陣列
let gravity; // 重力向量

// 讓 Canvas 顯示/隱藏的 DOM 元素
let canvasElement;


window.addEventListener('message', function (event) {
    const data = event.data;
    
    if (data && data.type === 'H5P_SCORE_RESULT') {
        
        finalScore = data.score; 
        maxScore = data.maxScore;
        scoreText = `最終成績分數: ${finalScore}/${maxScore}`;
        
        console.log("新的分數已接收:", scoreText); 
        
        // ----------------------------------------
        // 判斷是否為滿分並更新 fullScore
        // ----------------------------------------
        if (maxScore > 0 && finalScore === maxScore) {
            console.log("滿分! 啟動煙花!");
            fullScore = true;
            // 立即發射一些煙花以增加視覺效果
            for(let i = 0; i < 3; i++) {
                fireworks.push(new Firework()); 
            }
        } else {
            console.log("未滿分，分數:", finalScore);
            fullScore = false;
        }

        if (typeof redraw === 'function') {
            redraw(); 
        }
    }
}, false);


// =================================================================
// 步驟二：p5.js 煙花系統類別 (Particle 和 Firework)
// -----------------------------------------------------------------

// ----------------------------------------------------
// 粒子 (Particle) 類別：構成煙花爆炸的最小單元
// ----------------------------------------------------
class Particle {
    constructor(x, y, hue, firework) {
        this.pos = createVector(x, y);
        this.firework = firework;
        this.lifespan = 255;
        this.hue = hue;
        this.acc = createVector(0, 0); 
        
        if (this.firework) {
            // 主煙花的初始速度 (向上)
            this.vel = createVector(0, random(-12, -8)); 
        } else {
            // 爆炸碎片的速度 (向四周發散)
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2, 10));
        }
    }
    
    applyForce(force) {
        this.acc.add(force);
    }
    
    update() {
        if (!this.firework) {
            this.vel.mult(0.9); // 阻力
            this.lifespan -= 4; // 壽命減少
        }
        
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0); 
    }
    
    show() {
        colorMode(HSB, 360, 255, 255, 255); 
        
        if (!this.firework) {
            strokeWeight(2);
            stroke(this.hue, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }
        
        point(this.pos.x, this.pos.y);
    }

    done() {
        return this.lifespan < 0;
    }
}

// ----------------------------------------------------
// 煙花 (Firework) 類別
// ----------------------------------------------------
class Firework {
    constructor() {
        this.hue = random(360); 
        // 限制發射位置 X 軸 (在畫布寬度內)
        this.firework = new Particle(random(width), height, this.hue, true); 
        this.exploded = false;
        this.particles = []; 

        // !!! 關鍵修改：設定煙花爆炸的最大 Y 軸高度 (畫布中線以下) !!!
        // 畫布的 Y 軸座標是從上到下遞增的
        this.launchMaxY = random(height * 0.5, height * 0.8); 
    }
    
    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            
            // 檢查是否到達頂點 (速度變為正或接近於零)，或者是否超過限制高度
            if (this.firework.vel.y >= 0 || this.firework.pos.y <= this.launchMaxY) {
                this.exploded = true;
                this.explode();
            }
        }
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1); 
            }
        }
    }
    
    explode() {
        for (let i = 0; i < 100; i++) { 
            const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
            this.particles.push(p);
        }
    }
    
    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
    
    done() {
        return this.exploded && this.particles.length === 0;
    }
}

// =================================================================
// 步驟三：p5.js 繪製邏輯
// -----------------------------------------------------------------

function setup() { 
    // 獲取 Canvas 容器的尺寸 (應與 iframe 相同)
    const container = select('#scoreDisplayContainer');
    const CANVAS_WIDTH = 800; // 與 index.html 中設定的寬度一致
    const CANVAS_HEIGHT = 600; // 與 index.html 中設定的高度一致

    // 創建 Canvas
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(container); // 將 canvas 放入容器中
    canvasElement = canvas.elt; // 取得原始 DOM 元素以便控制 CSS

    gravity = createVector(0, 0.2); // 設置重力
    stroke(255); 
    strokeWeight(4); 
    background(0); 

    // 必須使用 loop() 才能讓 draw 持續運行，以便繪製動畫
    loop(); 
}

function draw() {
    
    // 如果是滿分模式，繪製煙花動畫
    if (fullScore) {
        // 由於我們調整了 CSS 讓 Canvas 蓋住 iframe，這裡只需要顯示 Canvas
        canvasElement.style.display = 'block'; 
        colorMode(RGB);
        
        // 繪製半透明黑色背景，製造拖尾效果
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
        // 非滿分模式：顯示分數，隱藏 Canvas (讓 H5P 內容可見)
        canvasElement.style.display = 'none'; 
        
        // 清除上一次的煙花殘留
        fireworks = []; 
        
        // 繪製分數顯示
        background(255); // 白色背景 (用於分數顯示)
        
        let percentage = (maxScore > 0) ? (finalScore / maxScore) * 100 : 0;
        
        textAlign(CENTER, CENTER);
        
        // --- 繪製分數文本 ---
        textSize(32);
        
        if (percentage >= 90) {
            fill(0, 200, 50); 
            text("恭喜！優異成績！", width / 2, height / 2 - 50);
            
        } else if (percentage >= 60) {
            fill(255, 181, 35); 
            text("成績良好，請再接再厲。", width / 2, height / 2 - 50);
            
        } else if (percentage > 0) {
            fill(200, 0, 0); 
            text("需要加強努力！", width / 2, height / 2 - 50);
            
        } else {
            fill(150);
            text("等待分數...", width / 2, height / 2);
        }

        // 顯示具體分數
        textSize(50);
        fill(50);
        text(`得分: ${finalScore}/${maxScore}`, width / 2, height / 2 + 50);
    }
}
