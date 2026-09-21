# সুন্দরবন ড্রাগ হাউস — Real Offline PWA

এই ZIP-এ মূল Offline PWA এবং requested enhancement একসাথে রাখা হয়েছে। `index.html` হলো চালু অ্যাপ। `app-original.html` মূল bundled source backup হিসেবে রাখা হয়েছে।

## যুক্ত/সংরক্ষিত ফিচার
- মোট দোকান / মোট বিক্রি / আজকের বিক্রি — আগের layout বজায় রেখে; বিক্রির টাকা eye icon দিয়ে ১০ সেকেন্ড দেখা যায়
- শনিবার+রবিবার, সোমবার+মঙ্গলবার, বুধবার+বৃহস্পতিবার — ২ কলাম; শুক্রবার একা নিচে
- আজকের মার্কেট/“কোন মার্কেট নেই” বার্তা এবং পরের মার্কেটের প্রস্তুতি বার্তা; আলাদা “আগামীকাল শনিবার” লাইন নেই
- Top 5 customer slow ticker
- Reminder slow ticker; Settings থেকে Edit/Delete/ON-OFF
- দোকানের ছোট ছবি, Call / WhatsApp / SMS আলাদা বাটন
- দোকানের নাম চাপলে পূর্ণ history/details page
- টাকা যোগ করলে হিসাব update এবং WhatsApp-এ বিলের message prefilled হয়; ব্যবহারকারী Send চাপবেন
- WhatsApp template Settings থেকে পরিবর্তনযোগ্য
- বাকি হিসাব: মোট বিল, জমা, “টিক = সম্পূর্ণ পরিশোধ”, বর্তমান বাকি ও history
- কোনো Product List / Inventory / Stock system যোগ করা হয়নি
- Logo ও Cover Photo ফোনের Gallery থেকে পরিবর্তন
- App name ও subtitle পরিবর্তন
- 4-digit password: প্রথমবার সেট, পরে change এবং ON/OFF
- Light / Dark mode
- Phone Notification test + reminder notification setting
- Auto backup প্রতি ৬ ঘণ্টা পর্যন্ত app চলাকালীন check; IndexedDB-তে সর্বশেষ ৭টি snapshot রাখা
- Manual backup filename: `Backup_DD-MM-YYYY_hh-mm-AM/PM.json`
- Restore
- Three-dot menu: সকল দোকান, মার্কেট, রিপোর্ট, Backup, Settings
- App pages-এ Back button
- Android/browser navigation flow আগের app history ব্যবহার করে

## গুরুত্বপূর্ণ
সাধারণ WhatsApp-এ ব্যবহারকারীর অনুমতি ছাড়া নীরবে message পাঠানো যায় না। তাই sale save হওয়ার পর WhatsApp message prefilled করে খোলা হয়; শুধু Send চাপতে হয়।

Auto backup static PWA-তে background-এ app বন্ধ থাকলেও guaranteedভাবে প্রতি ৬ ঘণ্টায় চালানো সম্ভব নয়। App চালু/খোলা হলে ৬ ঘণ্টার interval check করে snapshot রাখা হয়।

- Verified seed/backup retained: 48 shops and 27 sales records totaling ৳119,980.
- Header keeps only logo/name/subtitle; date/time moved into the reminder box.
- Added SMS template setting; SMS button opens the phone SMS app with prefilled text.
- Added medicine-delivery cover image: cover-demo.jpg; user can replace it from Settings.
