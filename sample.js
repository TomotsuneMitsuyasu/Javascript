$(document).ready(function(){

  
  var ave = 0;
 
  
  
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    const subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
  var sum = 0;
  sum = subject_points[0];
     sum += subject_points[1];
     sum += subject_points[2];
     sum += subject_points[3];
     sum += subject_points[4];
    

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    $("#sum_indicate").text(sum);
    
    ave = sum / subject_points.length
    var Kirisute = Math.floor(ave);
    $("#avarage_indicate").text(Kirisute);
    // return subject_points;
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  };
    
    function get_achievement(){
      if (ave >= 80) {
          return "A";
      } 
      else if(ave >= 60){
          return "B";
      }
      else if(ave >= 40){
          return "C";
      }
      else{
          return "D";
      }  
         // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  };

  
  function get_pass_or_failure(){
      let subject_points = score_indicate();
      let number=subject_points.length
      let judge= "合格";
      for(let i=0;i<number;i++){
          if(subject_points[i] <60){
              judge="不合格";
              break;
          }
      }
      return judge;
  }
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
 

  function judgement(){
      let achievement = get_achievement();
  let pass_or_failure =  get_pass_or_failure();
  return `あなたの成績は${achievement}です。${pass_or_failure}です`;
};
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
   

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
    console.log(score_indicate());
  });

  $("#btn-evaluation").click(function(){
     $("#evaluation").text(get_achievement());
  });

  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function() {
    $("#declaration").text(judgement());
  });
});