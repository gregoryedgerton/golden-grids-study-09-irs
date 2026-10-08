import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { BankBand, FactsBand } from "../bands/bands";
import { PayIntro, Reviewed } from "../lib/modules";
import { PAY } from "../content";
import "../styles.css";

function App() {
  useFontsReady(["700 1em 'Source Sans 3'", "400 1em 'Source Sans 3'"]);
  return (
    <Page current="payments.html" crumbs={["Home", "Payments"]} side={PAY.side} sideTitle="Your online account">
      <h1 className="title">{PAY.title}</h1>
      <PayIntro />
      <BankBand title={PAY.bank.title} body={PAY.bank.body} account={PAY.bank.account} guest={PAY.bank.guest} numbers={PAY.numbers} />
      <FactsBand id="methods" title={PAY.methods.title} lesson={PAY.methods.body} facts={PAY.methods.list} desktop={["right", false]} mobile={["top", false]} />
      <FactsBand id="cant" title={PAY.cant.title} lesson={PAY.cant.body} facts={PAY.cant.list} desktop={["top", true]} mobile={["right", true]} />
      <Reviewed page="payments" />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
