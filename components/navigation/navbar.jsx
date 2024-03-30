import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://detrix-dapp-builder.netlify.app" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/cw3d-logo.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
