import { Days, PreferenceType } from "../Types/Enums";
import { User } from "../Types/CustomTypes";

export const getUsers = (): User[] => users;

const users: User[] = [
    {
        Id: "test1",
        FirstName: "John",
        LastName: "Doe",
        NotificationPreference: {
            PreferenceType: PreferenceType.Daily,
        },
        ContactDetails: {
            Number: 1,
            Email: "email"
        }
    },
    {
        Id: "test2",
        FirstName: "Tom",
        LastName: "Doe",
        NotificationPreference: {
            PreferenceType: PreferenceType.Monthly,
            Date: 14
        },
        ContactDetails: {
            Number: 1,
            Email: "email"
        }
    },
    {
        Id: "test3",
        FirstName: "Dom",
        LastName: "Doe",
        NotificationPreference: {
            PreferenceType: PreferenceType.Weekly,
            Days: [Days.Monday, Days.Friday]
        },
        ContactDetails: {
            Number: 1,
            Email: "email"
        }
    },
    {
        Id: "test4",
        FirstName: "Dom",
        LastName: "Doe",
        NotificationPreference: {
            PreferenceType: PreferenceType.Weekly,
            Date: 10
        },
        ContactDetails: {
            Number: 1,
            Email: "email"
        }
    }
]

export const getDates = (): Date[] => dates;

const dates = [
    new Date(Date.UTC(2024, 1, 14)),
    new Date(Date.UTC(2024, 1, 15)),
    new Date(Date.UTC(2024, 1, 16)),
];