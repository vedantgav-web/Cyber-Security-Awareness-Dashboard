export const unit1Data = [
  {
    id: 1,
    title: "Phishing (Social Engineering)",
    mapping: "1.1 - Phishing",
    definition: "The practice of sending fraudulent communications that appear to come from a reputable source.",
    description: "Phishing is a type of social engineering where an attacker sends a fraudulent message designed to trick a human victim into revealing sensitive information.",
    realCase: {
      title: "The FACC 'Fake President' Fraud",
      date: "January 2016",
      place: "Austria / China",
      summary: "An Austrian aerospace parts maker lost €42 million ($54M) after a phishing attack.",
      details: "An entry-level accountant received an email appearing to be from the CEO (spear-phishing). The email requested an urgent transfer of funds for a 'secret project.' The money was laundered through banks in Slovakia, Hong Kong, and China. The CEO and CFO were eventually fired for 'severe breach of duties.'"
    },
    prevention: "Implement MFA, DMARC email authentication, and strict 'Four-Eyes' protocol for wire transfers."
  },
  {
    id: 2,
    title: "WannaCry Ransomware",
    mapping: "1.2 - Ransomware",
    definition: "Malware that employs asymmetric encryption to hold a victim's information at ransom.",
    description: "A crypto-virology attack that targets computers running Microsoft Windows by encrypting data and demanding ransom payments in Bitcoin.",
    realCase: {
      title: "The Global NHS Crisis",
      date: "May 12, 2017",
      place: "Global (150+ countries)",
      summary: "A worldwide cyberattack using the EternalBlue exploit stolen from the NSA.",
      details: "In the UK, the National Health Service (NHS) was crippled, leading to the cancellation of 19,000 appointments. The virus spread automatically across networks (Unit 1.4 - Worm behavior) without user interaction. It encrypted hard drives and demanded $300-$600 in Bitcoin."
    },
    prevention: "Apply Microsoft Security Bulletin MS17-010 (Unit 1.5 - Patching) and disable SMBv1."
  },
  {
    id: 3,
    title: "DDoS (Denial of Service)",
    mapping: "1.3 - Active Attacks",
    definition: "Flooding a network with traffic to exhaust resources and crash services.",
    description: "Distributed Denial of Service (DDoS) uses a 'Botnet'—a zombie army of infected IoT devices—to overwhelm a target's bandwidth.",
    realCase: {
      title: "The Dyn DNS Attack",
      date: "October 21, 2016",
      place: "USA / Global",
      summary: "The Mirai Botnet took down major sites like Netflix, Twitter, and Reddit.",
      details: "Attackers used the 'Mirai' malware to infect millions of insecure IoT devices (cameras, DVRs) using default passwords. They directed 1.2 Terabits of traffic per second at Dyn, a major DNS provider, effectively 'breaking' the internet for half a day."
    },
    prevention: "Use DDoS mitigation services (like Cloudflare), rate-limiting, and change default passwords on all IoT devices."
  },
  {
    id: 4,
    title: "Man-in-the-Middle (MitM)",
    mapping: "1.4 - Active Attacks",
    definition: "An attacker secretly relays and alters communication between two parties.",
    description: "The attacker sits between the user and the server, intercepting data (like passwords) before forwarding it, so neither party knows they are being watched.",
    realCase: {
      title: "DigiNotar Certificate Breach",
      date: "July 2011",
      place: "Netherlands",
      summary: "Fake SSL certificates were used to spy on 300,000+ Iranian Gmail users.",
      details: "Hackers breached the Dutch Certificate Authority 'DigiNotar' and issued a fraudulent SSL certificate for google.com. This allowed the attackers to intercept HTTPS traffic, decrypting 'secure' emails from citizens without them ever seeing a browser warning."
    },
    prevention: "Use Certificate Pinning, HSTS (HTTP Strict Transport Security), and avoid public Wi-Fi for sensitive tasks."
  },
  {
    id: 5,
    title: "Social Engineering",
    mapping: "1.5 .- Passive/Active hybrid",
    definition: "Manipulating people into performing actions or divesting confidential info.",
    description: "Unlike technical hacks, this targets the 'human hardware.' It relies on trust, authority, or helpfulness to bypass digital security.",
    realCase: {
      title: "The 2020 Twitter 'VIP' Hack",
      date: "July 15, 2020",
      place: "San Francisco, USA",
      summary: "High-profile accounts (Elon Musk, Bill Gates) were hacked to run a Bitcoin scam.",
      details: "Teenage hackers used 'vishing' (voice phishing) to call Twitter employees. They pretended to be IT support and tricked employees into giving up their internal admin tool credentials. They then logged into celebrity accounts and tweeted a fake 'double your money' crypto link."
    },
    prevention: "Standardize 'Security First' cultures and never share internal credentials over the phone or chat."
  },
  {
    id: 6,
    title: "Trojan Horse",
    mapping: "1.6 - Malware",
    definition: "Malware disguised as legitimate or useful software.",
    description: "A Trojan does not replicate itself (unlike a worm). It relies on the user to voluntarily execute it, thinking it is a game, utility, or update.",
    realCase: {
      title: "The Emotet Banking Trojan",
      date: "Active 2014 - 2021",
      place: "Global / Europe",
      summary: "A modular Trojan that stole bank logins and paved the way for ransomware.",
      details: "Emotet was distributed via spam emails with malicious Word documents (invoices). Once opened, the Trojan stayed dormant, stole contact lists, and sent itself to the victim's friends. It cost global organizations an estimated $2.5 billion before law enforcement took it down."
    },
    prevention: "Disable 'Macros' in Office documents and use advanced Endpoint Detection (EDR) software."
  },
  {
    id: 7,
    title: "SQL Injection (SQLi)",
    mapping: "1.7 - Database Security",
    definition: "Injecting malicious SQL code into input fields to manipulate a database.",
    description: "If an app doesn't 'sanitize' input, an attacker can type code into a 'Username' box that tells the database to 'DROP TABLE' or 'SELECT ALL PASSWORDS'.",
    realCase: {
      title: "The 7-Eleven Credit Card Breach",
      date: "August 2009",
      place: "USA",
      summary: "Hackers stole 130 million credit card numbers from Heartland Payment Systems.",
      details: "The attacker, Albert Gonzalez, used a SQL Injection attack on a web-facing corporate server. By bypassing the login screen with SQL commands, he gained access to the backend database where unencrypted credit card data was stored for processing."
    },
    prevention: "Use 'Parameterized Queries' (Prepared Statements) and perform regular database vulnerability scans."
  },
  {
    id: 8,
    title: "Spyware",
    mapping: "1.8 - Malware",
    definition: "Software that secretly records user activity (keystrokes, screen, mic).",
    description: "Spyware aims for 'Persistence.' It hides in the system to steal data over a long period rather than destroying files immediately.",
    realCase: {
      title: "The Pegasus Spyware Scandal",
      date: "Revealed 2021",
      place: "Global",
      summary: "State-sponsored spyware used to track journalists and politicians.",
      details: "Pegasus, developed by NSO Group, used 'Zero-Click' exploits on iPhones. A user didn't even have to click a link; a simple 'silent' WhatsApp call could install the spyware. It then gave attackers total access to the phone's camera, microphone, and encrypted messages."
    },
    prevention: "Keep mobile OS updated and use lockdown modes for high-risk individuals."
  },
  {
    id: 9,
    title: "IP Spoofing",
    mapping: "U1.9 - Active Attacks",
    definition: "The creation of Internet Protocol packets with a false source IP address.",
    description: "By faking the IP address, an attacker can bypass IP-based firewalls or launch 'Reflective' DDoS attacks where the victim gets flooded with responses to requests they never made.",
    realCase: {
      title: "The GitHub 1.3 Tbps Attack",
      date: "February 2018",
      place: "Global",
      summary: "One of the largest DDoS attacks in history, using Memcached spoofing.",
      details: "Attackers sent tiny requests to 'Memcached' servers while spoofing GitHub's IP address. The servers sent massive responses back to GitHub. This 'amplified' the attack by 50,000 times, hitting GitHub with 1.3 Terabits of data per second."
    },
    prevention: "Implement Ingress/Egress filtering (BCP 38) to block packets with fake source addresses."
  },
  {
    id: 10,
    title: "Computer Worm",
    mapping: "1.10 - Malware",
    definition: "Self-replicating malware that spreads through a network automatically.",
    description: "Unlike a virus, a worm does not need a host file. It exploits a 'hole' in the network code to hop from one computer to the next without any human interaction.",
    realCase: {
      title: "The Stuxnet Worm",
      date: "June 2010",
      place: "Iran (Natanz)",
      summary: "A highly complex worm that physically destroyed nuclear centrifuges.",
      details: "Stuxnet was the first 'cyber weapon.' It spread via USB and local networks, specifically looking for Siemens Industrial controllers. Once found, it changed the speed of centrifuges to make them explode, while sending fake 'everything is okay' data to the operators' screens."
    },
    prevention: "Network segmentation (VLANs) and 'Air-Gapping' critical industrial systems."
  }
];

export const unit5Data = [
  {
    id: 101,
    title: "Cloud Misconfiguration",
    mapping: "5.1 - Cloud specific threats",
    definition: "Security gaps in cloud infrastructure due to improper setup of servers or storage.",
    description: "When cloud resources (like AWS S3 buckets) are left open to the public without password protection or proper IAM roles.",
    realCase: {
      title: "The Capital One Data Breach",
      date: "July 2019",
      place: "McLean, Virginia, USA",
      summary: "106 million customers' personal information was exposed due to a misconfigured WAF.",
      details: "A former Amazon employee exploited a misconfigured Web Application Firewall to gain access to 140,000 Social Security numbers and 80,000 linked bank account numbers stored in AWS S3 buckets."
    },
    prevention: "Regularly audit S3 bucket permissions and implement the Principle of Least Privilege (Unit 1.1 - Authentication/Accountability)."
  }
];