import { useCallback, useState } from "react";
import { mailData, mail, mailSections } from "./maildata";
import styles from "./mail.module.css";

const Mail: React.FC = () => {
  const [mailState, setMailState] = useState<mailSections[]>(mailData);
  const [selectedSection, setSelectedSection] = useState<string>(
    mailData[0].name
  );
  const [mailList, setMailList] = useState<mail[] | undefined>(
    mailData[0].mails
  );
  const [mailContent, setMailContent] = useState<string>(
    mailData[0].mails[0].mailContent
  );

  const switchSections = useCallback(
    (mail: mailSections) => {
      setSelectedSection(mail.name);
      const findMailList = mailState.find((data) => mail.name === data.name);
      setMailList(findMailList?.mails);
      findMailList?.mails[0]?.mailContent &&
        setMailContent(findMailList?.mails[0]?.mailContent);
    },
    [mailState]
  );

  const showMailContent = useCallback(
    (mail: mail) => {
      const findSection = mailState.findIndex(
        (data, idx) => selectedSection === data.name
      );
      const findMailInSection = mailState[findSection]?.mails.findIndex(
        (data) => data.name === mail.name
      );
      if (findSection > -1 && findMailInSection > -1) {
        setMailState((prev) => {
          const newMailState = [...prev];
          const newMailList = { ...newMailState[findSection] };
          const newMails = [...newMailList.mails];
          const newMailRead = { ...newMails[findMailInSection], isRead: true };

          newMails[findMailInSection] = newMailRead;
          newMailList.mails = newMails;
          newMailState[findSection] = newMailList;
          setMailList(newMails);
          return newMailState;
        });
      }
      setMailContent(mail.mailContent);
    },
    [mailState, selectedSection]
  );

  return (
    <>
      <title>MAIL</title>
      <div className={styles.container}>
        <div className={styles.mailSections}>
          {mailState.map((mail, idx) => {
            return (
              <div
                className={styles.mailCard}
                onClick={() => switchSections(mail)}
              >
                <span>{mail.name}</span>
                <span className={styles.count}>{mail.mailCount}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.mails}>
          {mailList &&
            mailList.map((list, idx) => {
              return (
                <div
                  className={styles.mailCard}
                  onClick={() => showMailContent(list)}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{ fontWeight: list.isRead ? "normal" : "bold" }}
                    >
                      {list.name}
                    </span>
                    <span>{list.description}</span>
                  </div>
                  <div>
                    <span className={styles.date}>{list.date}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.mailContent}>{mailContent}</div>
      </div>
    </>
  );
};
export default Mail;
