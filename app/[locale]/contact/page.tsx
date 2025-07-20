"use client";

import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/Footer";

interface Props {
  params: { locale: string };
}

export default function ContactSection({ params }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section className="min-h-screen bg-white py-28 px-6 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("contact.heading.title")}
          </h2>
          <p className="text-gray-600">{t("contact.heading.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-10">
            {/* Phone */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Phone size={20} />
                {t("contact.contactMethods.phone.title")}
              </h3>
              <p className="text-blue-700 text-lg">
                {t("contact.contactMethods.phone.value")}
              </p>
              <p className="text-sm text-gray-600">
                {t("contact.contactMethods.phone.description")}
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Mail size={20} />
                {t("contact.contactMethods.email.title")}
              </h3>
              <p className="text-blue-700 text-lg">
                {t("contact.contactMethods.email.value")}
              </p>
              <p className="text-sm text-gray-600">
                {t("contact.contactMethods.email.description")}
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <MapPin size={20} />
                {t("contact.contactMethods.location.title")}
              </h3>
              <p className="text-blue-700 text-lg">
                {t("contact.contactMethods.location.value")}
              </p>
              <p className="text-sm text-gray-600">
                {t("contact.contactMethods.location.description")}
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Clock size={20} />
              {t("contact.businessHours.title")}
            </h3>

            {/* Senin – Jumat */}
            <div className="flex justify-between text-gray-800 w-full">
              <span>{t("contact.businessHours.hours.monFri.days")}</span>
              <span className="text-blue-600">{t("contact.businessHours.hours.monFri.time")}</span>
            </div>

            {/* Sabtu */}
            <div className="flex justify-between text-gray-800 w-full">
              <span>{t("contact.businessHours.hours.saturday.days")}</span>
              <span className="text-blue-600">{t("contact.businessHours.hours.saturday.time")}</span>
            </div>

            {/* Minggu */}
            <div className="flex justify-between text-gray-800 w-full">
              <span>{t("contact.businessHours.hours.sunday.days")}</span>
              <span className="text-red-600">{t("contact.businessHours.hours.sunday.time")}</span>
            </div>

            {/* Timezone Note */}
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Clock size={16} />
              {t("contact.businessHours.timezoneNote")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
