import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Detrix<span>-Dapp-Builder</span>
				</h1>
				<p>
					Get started by editing this page in{" "}
					<span>/pages/index.js</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#components"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Add Components</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#templates"}
				>
					<div className={styles.button}>
{/* 						<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Explore Templates</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://docs.alchemy.com/docs/create-web3-dapp"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Visit Docs</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://detrix.io" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						className={styles.alchemy_logo} src="/detrix-powered.png"></img>
						alt="Detrix Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/dambu07/detrix-dapp-builder/"
							target={"_blank"}
						>
							Github
						</a>
					</div>
				        <div>
						<a
							href="https://twitter.com/Detrix"
							target={"_blank"}
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
