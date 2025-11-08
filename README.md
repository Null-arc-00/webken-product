これは [Next.js](https://nextjs.org) プロジェクトで [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)によって作成された。  

## 最初に
Success or failure  
左側のダイスが右側より小さい場合に成功、それ以外は失敗

## 技術
page.tsxとDiceRoll.module.tsxをメインに構成  
globals.cssとlayout.tsx、CounterButton.module.cssでスタイルを指定  
それ以外は全部実行などに必要なファイル  

使用したフレームワークなど  
nextjs Typescript Tailwind CSS  

ReactのState Callbackを使用して数字がランダムに高速で切り替わるアニメーションを実装  
コードの一部にgemini、github copilotを使用

## 実行方法
projectをpullしてきてcmdなどでプロジェクトにディレクトリを合わせ[npm run dev]を実行