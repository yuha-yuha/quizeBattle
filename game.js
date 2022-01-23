var no = 0;
var mainGame = document.getElementById("MainGame");


console.log(mainGame);
var quizeList = [
    {
        quizes: "CHUNITHM PRADISE LOSTにて登場した最多ノーツになった15",
        answer: "祈 -我ら神祖と歩むものなり-"
    },
    {
        quizes: "CHUNITH 現15で一番古い楽曲",
        answer: "怒槌"
        
    },
    {
        quizes: "スカイフェザーの14+の曲",
        answer: "Glorious Crown"
    }
]

var enemys = [
    {
        HP: 100,
        Attack: 20
    }
]

var player = {
    HP: 200,
    Attack: 30
}

function showHP(){
    document.getElementById("playerHP").innerHTML = "あなたのHP:" + player.HP;
}


function PlayersAttack()
{
    enemys[0].HP -= player.Attack;
    showHP();
}

function EnemysAttack()
{
    player.HP -= enemys[0].Attack;
    showHP();
}

function quize() 
{
        document.getElementById("question").innerHTML = quizeList[no % quizeList.length].quizes;
}

function judgment() 
{
        var ans = document.getElementById("ans").value;

        if(ans == quizeList[no % quizeList.length].answer){
            output = "正解";
            PlayersAttack();
        }

        else{
            output = "不正解";
            EnemysAttack();
        }

        document.getElementById("output_judgment").innerHTML = output;

        if (enemys[0].HP <= 0){
            document.getElementById("ProgressReport").innerHTML = "勝利";
            mainGame.style.display = 'none';
            ReturnTitle();
        }

        else if (player.HP <= 0){
            document.getElementById("ProgressReport").innerHTML = "敗北";
            mainGame.style.display = 'none';
            ReturnTitle();
        }

        else{
            document.getElementById("ProgressReport").innerHTML = "あと" + enemys[0].HP + "ダメージ!";
            no++;
            quize();
        }

        var ans = document.getElementById("ans").value = "";
        
}


function ReturnTitle() //enter入力でindex.html に戻る関数
{
    window.document.onkeydown = function(event){
        if (event.key === 'Enter') {
            window.location.href = 'index.html';
        }
    }
}