function App() {
    return (
        <div className="wrap">
            <header>
                <div className="brand profile-head">
                    <img
                        src={`${import.meta.env.BASE_URL}/assets/my-image.png`}
                        alt="KMTech profile icon"
                        className="profile-icon"
                    />

                    <div>
                        <div className="kicker">
                            <span className="dot"></span> Portfolio / Profile
                        </div>
                        <h1>KMTech（Go / TypeScript / React）</h1>
                        <p className="subtitle">
                            2019年からバックエンドを主軸に、フロント・クラウドまで含めて
                            <span className="hl">新規開発〜運用改善（性能/障害対応）</span>
                            まで一貫して対応しています。
                        </p>
                    </div>
                </div>

                <div className="actions">
                    <a
                        className="btn primary"
                        href="https://zenn.dev/kmtech"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📝 Zenn（技術記事）
                    </a>
                    <a
                        className="btn"
                        href="https://github.com/KM-rira"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💻 GitHub
                    </a>
                    <a className="btn" href="#certifications">
                        🏅 資格
                    </a>
                    <a className="btn" href="#projects">
                        📌 案件履歴
                    </a>
                    <a className="btn" href="#skills">
                        🧰 Skills
                    </a>
                </div>
            </header>

            <section className="grid">
                <div>
                    <div className="card">
                        <h2>
                            概要 <span className="pill">Summary</span>
                        </h2>
                        <div className="two">
                            <div className="kv">
                                <b>得意領域</b>
                                <div>GoでのAPI/バッチ、運用改善、障害対応、クラウド設計（AWS/GCP）</div>
                            </div>
                            <div className="kv">
                                <b>開発スタイル</b>
                                <div>要件整理→設計→実装→レビュー→運用まで、品質とスピードの両立</div>
                            </div>
                            <div className="kv">
                                <b>経験年数</b>
                                <div>
                                    Go：2019/05〜現在（約6年10ヶ月）
                                    <br />
                                    TypeScript：2019/05〜現在（約6年10ヶ月）
                                    <br />
                                    React：2019/05〜現在（約6年10ヶ月）
                                </div>
                            </div>
                            <div className="kv">
                                <b>得意な改善</b>
                                <div>バッチ性能チューニング / ログ解析 / 原因特定 / 再発防止</div>
                            </div>
                        </div>
                        <p className="small" style={{ marginTop: "12px" }}>
                            ※このページは1ファイルで完結（HTML+CSS）しています。必要なら「お問い合わせ」導線や「実績の数値（例：処理時間◯%改善）」も追記できます。
                        </p>
                    </div>

                    <section
                        className="card"
                        id="certifications"
                        style={{ marginTop: "16px" }}
                    >
                        <h2>
                            資格 <span className="pill">Certifications</span>
                        </h2>

                        <div className="skills" style={{ marginTop: "12px" }}>
                            <span className="chip">AWS Certified Developer – Associate</span>
                            <span className="chip">GCP Associate Cloud Engineer</span>
                            <span className="chip">JDLA ディープラーニングG検定</span>
                            <span className="chip">Python3 エンジニア認定基礎資格</span>
                            <span className="chip">Python3 データ分析資格</span>
                            <span className="chip">LinuC Level 1</span>
                        </div>
                    </section>
                </div>

                <aside className="card">
                    <h2 id="skills">
                        スキル一覧 <span className="pill">All Skills</span>
                    </h2>

                    <div className="muted" style={{ marginBottom: "8px" }}>
                        Backend
                    </div>
                    <div className="skills">
                        <span className="chip">Go（Gin/Echo）</span>
                        <span className="chip">Python（Django）</span>
                        <span className="chip">gRPC</span>
                        <span className="chip">OpenAPI</span>
                    </div>

                    <div className="muted" style={{ margin: "12px 0 8px" }}>
                        Frontend
                    </div>
                    <div className="skills">
                        <span className="chip">TypeScript</span>
                        <span className="chip">React（Next.js / Vite）</span>
                    </div>

                    <div className="muted" style={{ margin: "12px 0 8px" }}>
                        Cloud
                    </div>
                    <div className="skills">
                        <span className="chip">AWS（EKS, Lambda, Step Functions）</span>
                        <span className="chip">AWS（S3, CloudFront, Cognito）</span>
                        <span className="chip">GCP（GKE, Cloud Spanner）</span>
                        <span className="chip">GCP（Cloud CDN, Monitoring, Vertex AI）</span>
                    </div>

                    <div className="muted" style={{ margin: "12px 0 8px" }}>
                        DB / Analytics
                    </div>
                    <div className="skills">
                        <span className="chip">Cloud Spanner</span>
                        <span className="chip">Aurora（MySQL/PostgreSQL）</span>
                        <span className="chip">PostgreSQL</span>
                        <span className="chip">Snowflake</span>
                    </div>

                    <div className="muted" style={{ margin: "12px 0 8px" }}>
                        DevOps
                    </div>
                    <div className="skills">
                        <span className="chip">GitHub Actions</span>
                        <span className="chip">CircleCI</span>
                        <span className="chip">Docker</span>
                        <span className="chip">Terraform</span>
                        <span className="chip">Datadog</span>
                        <span className="chip">Grafana</span>
                    </div>
                </aside>
            </section>

            <section className="card" id="projects" style={{ marginTop: "16px" }}>
                <h2>
                    案件履歴 <span className="pill">Projects</span>
                </h2>

                <ul className="list">
                    <li className="row">
                        <div className="when">2025/12〜2026/04</div>
                        <div>
                            <div className="role">AI×経理自動化</div>
                            <div className="meta">
                                Go / TypeScript / React / GCP（GKE, Cloud Spanner）
                            </div>
                            <div className="skills">
                                <span className="chip">要件整理</span>
                                <span className="chip">設計</span>
                                <span className="chip">実装</span>
                                <span className="chip">レビュー</span>
                                <span className="chip">運用</span>
                                <span className="chip">バッチ性能改善</span>
                                <span className="chip">障害対応</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2025/02〜2025/11</div>
                        <div>
                            <div className="role">カードコレクションゲーム（新規開発）</div>
                            <div className="meta">
                                Go（Echo）/ Snowflake / TypeScript / React / GCP
                            </div>
                            <div className="skills">
                                <span className="chip">課金</span>
                                <span className="chip">ガチャ</span>
                                <span className="chip">マスターデータJob</span>
                                <span className="chip">運用改善（ログ調査）</span>
                                <span className="chip">不具合対応</span>
                                <span className="chip">分析クエリ作成</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2024/07〜2025/01</div>
                        <div>
                            <div className="role">求人プラットフォーム（新規開発）</div>
                            <div className="meta">Go（Echo）/ TypeScript / React / AWS</div>
                            <div className="skills">
                                <span className="chip">機能追加（複数）</span>
                                <span className="chip">バッチ不具合調査</span>
                                <span className="chip">原因特定</span>
                                <span className="chip">改修</span>
                                <span className="chip">関係者連携</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2020/05〜2024/06</div>
                        <div>
                            <div className="role">MVNO回線情報管理（長期）</div>
                            <div className="meta">Go / AWS（運用含む）/ TypeScript / React</div>
                            <div className="skills">
                                <span className="chip">要件定義</span>
                                <span className="chip">設計</span>
                                <span className="chip">開発</span>
                                <span className="chip">テスト</span>
                                <span className="chip">リリース</span>
                                <span className="chip">Go 1.14→1.21.7</span>
                                <span className="chip">ライブラリ更新</span>
                                <span className="chip">スクラムマスター</span>
                                <span className="chip">ドキュメント整備</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2020/04〜2021/07</div>
                        <div>
                            <div className="role">メーカー基幹システム</div>
                            <div className="meta">Go / AWS / TypeScript / React</div>
                            <div className="skills">
                                <span className="chip">要件定義</span>
                                <span className="chip">設計</span>
                                <span className="chip">開発</span>
                                <span className="chip">テスト</span>
                                <span className="chip">リリース</span>
                                <span className="chip">ドキュメント整備</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2020/05〜2021/03</div>
                        <div>
                            <div className="role">印刷会社クラウドシステム</div>
                            <div className="meta">Go / AWS / TypeScript / React</div>
                            <div className="skills">
                                <span className="chip">要件定義</span>
                                <span className="chip">設計</span>
                                <span className="chip">開発</span>
                                <span className="chip">テスト</span>
                                <span className="chip">リリース</span>
                                <span className="chip">ドキュメント整備</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2019/11〜2020/04</div>
                        <div>
                            <div className="role">住宅ローン審査システム</div>
                            <div className="meta">Python（Django）/ TypeScript / React</div>
                            <div className="skills">
                                <span className="chip">審査ロジック</span>
                                <span className="chip">スコアリング</span>
                                <span className="chip">コードレビュー</span>
                                <span className="chip">進捗管理</span>
                                <span className="chip">多関係者調整</span>
                            </div>
                        </div>
                    </li>

                    <li className="row">
                        <div className="when">2019/05〜2019/10</div>
                        <div>
                            <div className="role">保険営業職員向けタブレット連携</div>
                            <div className="meta">Java（Spring）</div>
                            <div className="skills">
                                <span className="chip">申込者登録</span>
                                <span className="chip">検索</span>
                                <span className="chip">帳票出力</span>
                                <span className="chip">設計</span>
                                <span className="chip">開発</span>
                                <span className="chip">テスト</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <footer>
                © {new Date().getFullYear()} KMTech — Built with React + Vite.
            </footer>
        </div>
    );
}

export default App;
