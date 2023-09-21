import { Box } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import BillingDetailedOverdue from '../../components/billing-detailed/billing-detailed-overdue';
import BillingDetailedPaid from '../../components/billing-detailed/billing-detailed-paid';
import BillingDetailedProjected from '../../components/billing-detailed/billing-detailed-projected';
import BillingValueOverdue from '../../components/billing-value/billing-value-overdue';
import BillingValuePaid from '../../components/billing-value/billing-value-paid';
import BillingValueProjected from '../../components/billing-value/billing-value-projected';
import ClientsNonpaying from '../../components/clients/clients-nonpaying';
import ClientsPaying from '../../components/clients/clients-paying';
import { MetricsDasboardProvider } from '../../context/MetricsDashboard';
import { SingContext } from '../../context/SingContext';
import './styles.css';

function Home() {
  const { value } = useContext(SingContext)
  const navigate = useNavigate()

  if (!value) navigate("/")

  return (
    <MetricsDasboardProvider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          width: "100vw",
          paddingLeft: "7.5vw"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            paddingTop: "18vh"
          }}
        >
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