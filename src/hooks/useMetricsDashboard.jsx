import { useContext, useEffect } from "react"
import api from "../services/api"
import { MetricsDashboardContext } from "../context/MetricsDashboard"
import { SingContext } from "../context/SingContext";

export default function useMetricsDashboard() {
  const {
    valueOverdue,
    setValueOverdue,
    valuePaid,
    setValuePaid,
    valueProjected,
    setValueProjected,
    countOverdue,
    setCountOverdue,
    countPaid,
    setCountPaid,
    countProjected,
    setCountProjected,
    listOverdue,
    setListOverdue,
    listPaid,
    setListPaid,
    listProjected,
    setListProjected,
    noPayments,
    onPayments,
    onPaymentsList,
    noPaymentsList,
    setNoPayments,
    setOnPayments,
    setNoPaymentsList,
    setOnPaymentsList,
  } = useContext(MetricsDashboardContext)
  const { value } = useContext(SingContext);

  async function metricsUpdate() {
    try {
      const { data } = await api.get("/charges/metrics", {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      setValuePaid(data.paid.paidTotal);
      setValueProjected(data.planned.plannedTotal);
      setValueOverdue(data.overdue.overdueTotal);

      setCountPaid(data.paid.paidCount);
      setCountProjected(data.planned.plannedCount);
      setCountOverdue(data.overdue.overdueCount);

      setListPaid(data.paid.paidList);
      setListProjected(data.planned.plannedList);
      setListOverdue(data.overdue.overdueList);

      const { data: data2 } = await api.get("/customers/metrics", {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      setNoPayments(data2.defaulters.defaultersTotal.total);
      setOnPayments(data2.paymentsOn.paymentsOnTotal.total);
      setNoPaymentsList(data2.defaulters.defaultersList);
      setOnPaymentsList(data2.paymentsOn.paymentsOnList);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    metricsUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalPrices = {
    valueOverdue,
    valuePaid,
    valueProjected,
  }

  const totalCounts = {
    countPaid,
    countProjected,
    countOverdue,
  }

  const listBillings = {
    paid: listPaid,
    projected: listProjected,
    overdue: listOverdue,
  }

  const clientsCounts = {
    noPayments,
    onPayments,
  }

  const clientsList = {
    noPayments: noPaymentsList,
    onPayments: onPaymentsList,
  }

  return {
    metrics: {
      totalPrices,
      totalCounts,
      listBillings,
      clientsCounts,
      clientsList
    },
    metricsUpdate,
  }
}
