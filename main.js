let players = [{
    name: '櫻木花道',
    pts: 0,
    reb: 0,
    ast: 0,
    stl: 0,
    blk: 2
  },
  {
    name: '流川楓',
    pts: 30,
    reb: 6,
    ast: 3,
    stl: 3,
    blk: 0
  },
  {
    name: '赤木剛憲',
    pts: 16,
    reb: 10,
    ast: 0,
    stl: 0,
    blk: 5
  },
  {
    name: '宮城良田',
    pts: 6,
    reb: 0,
    ast: 7,
    stl: 6,
    blk: 0
  },
  {
    name: '三井壽',
    pts: 21,
    reb: 4,
    ast: 3,
    stl: 0,
    blk: 0
  }
]

const dataPanel = document.querySelector('#data-panel')


// write your code here
let playerList = '' //先建立空字串
function displayPlayerList(players) {
  players.forEach(player => { //player裡的陣列內容都要經過此迴圈裡個改造
    playerList += `<tr>` //先加上<tr>
    for (let key in player) { //把player的key撈出來進行以下程式的判斷
      if (key === 'name') {
        playerList += `<td>${player[key]}</td>`
      } else {
        playerList += `
        <td>
          <span style="font-size: 25px" > ${player[key]} </span>
          <i class = "fa fa-plus-circle up" aria-hidden="true" ></i>
          <i class = "fa fa-minus-circle down" aria-hidden="true" ></i>
        </td>
        `
      }
    }
    playerList += `</tr>` //結尾加上</tr>
  })

  return playerList //回傳值
}

dataPanel.innerHTML = displayPlayerList(players)



dataPanel.addEventListener('click', function (event) {
  let target = event.target
  if (target.classList.contains('fa-plus-circle') || target.classList.contains('fa-minus-circle')) { //先判斷class，只有此class才能往下執行
    let score = parseInt(target.parentElement.children[0].innerHTML) //抓出分數並把它整數化
    if (target.classList.contains('fa-plus-circle')) { // 開始判斷按鈕進行加減動作
      score += 1
    } else {
      if (score <= 0) { //避免有負數產生
        score = 0
      } else {
        score -= 1
      }
    }
    target.parentElement.children[0].innerHTML = `${score}` //最後得到的分數更新到HTML上
  }
})