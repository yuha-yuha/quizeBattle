var no = 0;
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
        HP: 100
    }
]

var player = {
    HP: 200,
    Attack: 30
}


function PlayersAttack()
{
    enemys[0].HP -= player.Attack;
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
        }

        document.getElementById("output_judgment").innerHTML = output;

        if (enemys[0].HP <= 0){
            document.getElementById("ProgressReport").innerHTML = "勝利";
        }

        else if (player.HP <= 0){
            document.getElementById("ProgressReport").innerHTML = "敗北";
        }

        else{
            document.getElementById("ProgressReport").innerHTML = "あと" + enemys[0].HP + "ダメージ!";
            no++;
            quize();
        }

        var answ = document.getElementById("ans").value = "";
}

function PlayersAttack()
{
    enemys[0].HP -= player.Attack;
}