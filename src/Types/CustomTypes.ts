import { Days, PreferenceType} from '../Types/Enums'

export type NotificationPreference = {
    readonly PreferenceType: PreferenceType;
    readonly Days?: Days[];
    readonly Date?: number
}

export type ContactDetails = {
    readonly Number: number;
    readonly Email: string;
}

export type User = {
    readonly Id: string;
    readonly FirstName: string;
    readonly LastName: string;
    readonly ContactDetails: ContactDetails;
    readonly NotificationPreference: NotificationPreference;
}

export type UserDetails = {
    readonly Id: string;
    readonly FirstName: string;
    readonly LastName: string;
    readonly ContactDetails: ContactDetails;
}

export type DailyNotificationList = {
    readonly Day: string;
    readonly UserDetails: UserDetails[]
}

export type NotificationReport = {
    readonly Day: Date;
    readonly Users: string[]
}