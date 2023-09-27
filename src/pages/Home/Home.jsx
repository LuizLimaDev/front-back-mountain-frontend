import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import BillingDetailedOverdue from '../../components/DataDisplay/Tables/billing-detailed/billing-detailed-overdue';
import BillingDetailedPaid from '../../components/DataDisplay/Tables/billing-detailed/billing-detailed-paid';
import BillingDetailedProjected from '../../components/DataDisplay/Tables/billing-detailed/billing-detailed-projected';
import BillingValueOverdue from '../../components/DataDisplay/Tables/billing-value/billing-value-overdue';
import BillingValuePaid from '../../components/DataDisplay/Tables/billing-value/billing-value-paid';
import BillingValueProjected from '../../components/DataDisplay/Tables/billing-value/billing-value-projected';
import ClientsNonpaying from '../../components/DataDisplay/Tables/clients/clients-nonpaying';
import ClientsPaying from '../../components/DataDisplay/Tables/clients/clients-paying';
import { MetricsDasboardProvider } from '../../context/MetricsDashboard';
import { SingContext } from '../../context/SingContext';
import './styles.css';

function Home() {
  const { value } = useContext(SingContext)
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    if (!value) navigate("/")
  }, [navigate, value])

  return (
    <MetricsDasboardProvider>
      <Box
        sx={theme.layoutOutletHome}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "2.12rem",

              paddingBottom: "1.25rem"
            }}
          >
            <BillingValueOverdue />
            <BillingValuePaid />
            <BillingValueProjected />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2.12rem",

              padding: "1.5rem 0 1.25rem"
            }}
          >
            <BillingDetailedOverdue />
            <BillingDetailedPaid />
            <BillingDetailedProjected />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2.12rem",

              padding: "2rem 0 3rem"
            }}
          >
            <ClientsNonpaying />
            <ClientsPaying />
          </Box>
        </Box>
      </Box >

    </MetricsDasboardProvider>
  );
}

export default Home;