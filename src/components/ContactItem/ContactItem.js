const { IonAccordion, IonItem, IonLabel, IonImg } = require("@ionic/react")

const ContactItem = function(props)
{
    return(
        <IonAccordion value = {props.name}>
            <IonItem slot = "header">
                <IonLabel>{props.name}</IonLabel>
            </IonItem>
            <IonList slot = 'content'>
                <IonItem>
                    <IonImg></IonImg>
                </IonItem>
                <IonItem>
                    <IonLabel>{props.email}</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>{props.phoneNum}</IonLabel>
                </IonItem>
            </IonList>
        </IonAccordion>
    )
}