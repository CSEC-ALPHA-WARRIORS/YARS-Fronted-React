import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export const useRegistrationFormState = create(
	immer(
		devtools((set) => ({
			activeTab: 0,
			personal_info: {},
			address: {},
			emergency_contact: {},
			educational_background: {},
			registration: {},
			nextTab: () =>
				set((state) => {
					state.activeTab++;
				}),
			previousTab: () =>
				set((state) => {
					if (state.activeTab > 0) {
						state.activeTab = state.activeTab - 1;
					}
				}),
			setPersonalInfo: (personal_info) =>
				set((state) => {
					state.personal_info = personal_info;
				}),
			setAddress: (address) =>
				set((state) => {
					state.address = address;
				}),
			setEmergencyContact: (emergency_contact) =>
				set((state) => {
					state.emergency_contact = emergency_contact;
				}),
			setEducationalBackground: (educational_background) =>
				set((state) => {
					state.educational_background = educational_background;
				}),
			setRegistration: (registration) =>
				set((state) => {
					state.registration = registration;
				}),
		}))
	)
);
