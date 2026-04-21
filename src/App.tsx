import { useState } from "react";
import { projects, type Project } from "./data/projects";

function App() {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
                                    Go：約6年
                                    <br />
                                    TypeScript：約6年
                                    <br />
                                    React：約6年
                                    <br />
                                    Python：6ヶ月
                                    <br />
                                    Java：6ヶ月
                                </div>
                            </div>
                            <div className="kv">
                                <b>得意な改善</b>
                                <div>バッチ性能チューニング / ログ解析 / 原因特定 / 再発防止</div>
                            </div>
                        </div>
                        <p className="small" style={{ marginTop: "12px" }}>
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
                    案件履歴 -- クリックすると詳細が表示されます！ <span className="pill">Projects</span>
                </h2>

                <ul className="list">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="row clickable-row"
                            onClick={() => {
                                console.log("clicked", project);
                                setSelectedProject(project)
                            }}
                        >
                            <div className="when">{project.period}</div>
                            <div>
                                <div className="role">{project.title}</div>
                                <div className="meta">{project.meta}</div>
                                <div className="skills">
                                    {project.chips.map((chip) => (
                                        <span key={chip} className="chip">
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="modal-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <div>
                                <div className="small">{selectedProject.period}</div>
                                <h3 className="modal-title">{selectedProject.title}</h3>
                                <div className="meta">{selectedProject.meta}</div>
                            </div>

                            <button
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="modal-text">
                            {selectedProject.detail || "詳細は準備中です。"}
                        </div>
                    </div>
                </div>
            )}

            <footer>
                © {new Date().getFullYear()} KMTech — Built with React + Vite.
            </footer>
        </div>
    );
}

export default App;
