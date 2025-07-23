import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper"; // Keep this import
import MainPrompt from "../components/MainPrompt/MainPrompt";
import UpgradeButton from '@/components/UpgradeButton';

const Home = () => {
  return (
    // Move AuthWrapper to wrap only MainPrompt if that's its primary role
    // This makes the UpgradeButton outside the AuthWrapper's influence
    <>
      <AuthWrapper>
        <div className={styles.main}>
          <MainPrompt />
        </div>
      </AuthWrapper>

      {/* Render the UpgradeButton directly in the Home component's return */}
      <div style={{ marginTop: '20px', textAlign: 'center', position: 'fixed', bottom: '20px', width: '100%' }}>
        <UpgradeButton />
      </div>
    </>
  );
};

export default Home;