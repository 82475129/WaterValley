# 水之谷 Aqua Valley - GitHub 連線網頁版

這包是把 Unity 2D 遊戲改成「GitHub Pages 網頁展示 + Unity WebGL 連結」的版本。

## 你會得到

- GitHub Pages 首頁
- 遊戲介紹頁
- 角色頁
- 怪物頁
- 技能頁
- 下載頁
- 自動讀取 `data/game-data.json`
- GitHub Actions 自動部署到 Pages

## 使用方式

1. 在 GitHub 建立 Repository，例如：`AquaValley`
2. 把這包內容上傳到 GitHub
3. 到 GitHub Repository：`Settings` → `Pages`
4. Source 選：`GitHub Actions`
5. Push 後會自動部署
6. 網頁網址會類似：`https://你的帳號.github.io/AquaValley/`

## Unity WebGL 放法

Unity 內選：

`File > Build Settings > WebGL > Build`

把 Unity 輸出的 WebGL 檔案放到：

`docs/game/`

最後網址會是：

`https://你的帳號.github.io/AquaValley/game/`
