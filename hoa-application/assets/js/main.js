const navItems = [
  { id: "dashboard", label: "Dashboard", href: "dashboard.html", icon: "layout-dashboard" },
  { id: "communities", label: "Communities", href: "communities.html", icon: "building-2" },
  { id: "homeowners", label: "Homeowners", href: "homeowners.html", icon: "users" },
  { id: "properties", label: "Properties", href: "properties.html", icon: "house" },
  { id: "violations", label: "Violations", href: "violations.html", icon: "triangle-alert" },
  { id: "work-orders", label: "Work Orders", href: "work-orders.html", icon: "wrench" },
  { id: "vendors", label: "Vendors", href: "vendors.html", icon: "briefcase-business" },
  { id: "communications", label: "Communications", href: "communications.html", icon: "mail" },
  { id: "documents", label: "Documents", href: "documents.html", icon: "folder" },
  { id: "payments", label: "Payments", href: "payments.html", icon: "credit-card" },
  { id: "reports", label: "Reports", href: "reports.html", icon: "chart-no-axes-combined" }
];

const communities = {
  "oak-ridge": {
    id: "oak-ridge",
    name: "Oak Ridge Estates",
    shortName: "Oak Ridge",
    type: "Single-family HOA",
    location: "Brookfield, Connecticut",
    address: "12 Oak Ridge Lane, Brookfield, CT 06804",
    established: "1986",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=88",
    manager: "Sarah Mitchell",
    managerEmail: "sarah@havenridgemgmt.com",
    units: 248,
    homeownersCount: 264,
    occupancy: 96,
    collectionRate: 92,
    assessed: 500920,
    collected: 456320,
    outstanding: 36480,
    overdue: 8120,
    openViolations: 18,
    openWorkOrders: 24,
    monthlyCollections: [68, 74, 79, 82, 88, 92],
    amenities: [
      { name: "Clubhouse", icon: "landmark" },
      { name: "Outdoor pool", icon: "waves" },
      { name: "Tennis courts", icon: "circle-dot" },
      { name: "Two playgrounds", icon: "trees" }
    ],
    board: [
      { name: "Michael Torres", role: "Board President", initials: "MT" },
      { name: "Elaine Brooks", role: "Treasurer", initials: "EB" },
      { name: "Priya Shah", role: "Secretary", initials: "PS" }
    ],
    homeowners: [
      { name: "Emily Johnson", address: "321 Birch Lane", email: "emily.johnson@example.com", phone: "(203) 555-0128", account: "Current", since: "Mar 2019" },
      { name: "John Smith", address: "123 Oakwood Drive", email: "john.smith@example.com", phone: "(203) 555-0184", account: "Current", since: "Jun 2016" },
      { name: "Carla Nguyen", address: "789 Pine Court", email: "carla.nguyen@example.com", phone: "(203) 555-0141", account: "Past Due", since: "Nov 2021" },
      { name: "David & Ana Ruiz", address: "456 Maple Way", email: "ruiz.family@example.com", phone: "(203) 555-0197", account: "Current", since: "Aug 2018" },
      { name: "Marcus Reed", address: "88 Willow Bend", email: "marcus.reed@example.com", phone: "(203) 555-0162", account: "Payment Plan", since: "Jan 2023" }
    ],
    properties: [
      { address: "123 Oakwood Drive", owner: "John Smith", type: "Single Family", beds: "4 bd / 3 ba", occupancy: "Owner occupied", assessment: 2100, status: "Active" },
      { address: "321 Birch Lane", owner: "Emily Johnson", type: "Single Family", beds: "3 bd / 2 ba", occupancy: "Owner occupied", assessment: 2100, status: "Active" },
      { address: "456 Maple Way", owner: "David & Ana Ruiz", type: "Single Family", beds: "4 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 2100, status: "Active" },
      { address: "789 Pine Court", owner: "Carla Nguyen", type: "Single Family", beds: "3 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 2100, status: "Active" },
      { address: "88 Willow Bend", owner: "Marcus Reed", type: "Single Family", beds: "4 bd / 3 ba", occupancy: "Tenant occupied", assessment: 2100, status: "Rental" }
    ],
    workOrders: [
      { id: "WO-1048", title: "Street light out", location: "Oakwood Drive entrance", vendor: "BrightLine Electric", priority: "High", status: "In Progress", due: "Aug 6, 2026" },
      { id: "WO-1046", title: "Pool gate latch repair", location: "Community pool", vendor: "Apex Pool & Spa", priority: "Urgent", status: "Scheduled", due: "Aug 4, 2026" },
      { id: "WO-1041", title: "Irrigation leak", location: "Birch Lane common area", vendor: "Greenway Grounds", priority: "Medium", status: "Open", due: "Aug 9, 2026" },
      { id: "WO-1037", title: "Clubhouse HVAC service", location: "Clubhouse", vendor: "North County Mechanical", priority: "Low", status: "Completed", due: "Jul 31, 2026" },
      { id: "WO-1032", title: "Playground mulch refresh", location: "East playground", vendor: "Greenway Grounds", priority: "Medium", status: "Completed", due: "Jul 28, 2026" }
    ],
    vendors: [
      { name: "Greenway Grounds", service: "Landscaping", contact: "Lena Foster", phone: "(203) 555-0201", contract: "$4,850 / month", status: "Approved", initials: "GG" },
      { name: "BrightLine Electric", service: "Electrical", contact: "Theo Martin", phone: "(203) 555-0216", contract: "As needed", status: "Approved", initials: "BE" },
      { name: "Apex Pool & Spa", service: "Pool service", contact: "Mia Patel", phone: "(203) 555-0238", contract: "$2,200 / month", status: "Approved", initials: "AP" },
      { name: "North County Mechanical", service: "HVAC", contact: "Greg Ellis", phone: "(203) 555-0264", contract: "As needed", status: "Review Due", initials: "NC" }
    ],
    payments: [
      { id: "PAY-8932", homeowner: "John Smith", address: "123 Oakwood Drive", method: "ACH", amount: 525, date: "Aug 3, 2026", status: "Paid" },
      { id: "PAY-8924", homeowner: "Emily Johnson", address: "321 Birch Lane", method: "Credit card", amount: 525, date: "Aug 2, 2026", status: "Paid" },
      { id: "PAY-8917", homeowner: "David & Ana Ruiz", address: "456 Maple Way", method: "Check", amount: 525, date: "Aug 1, 2026", status: "Processing" },
      { id: "PAY-8908", homeowner: "Marcus Reed", address: "88 Willow Bend", method: "ACH", amount: 325, date: "Jul 30, 2026", status: "Partial" },
      { id: "PAY-8899", homeowner: "Carla Nguyen", address: "789 Pine Court", method: "ACH", amount: 525, date: "Jul 28, 2026", status: "Returned" }
    ],
    violations: [
      { id: "VIO-284", issue: "Trash bins visible", property: "456 Maple Way", owner: "David & Ana Ruiz", opened: "Jul 27, 2026", deadline: "Aug 7, 2026", status: "Open" },
      { id: "VIO-279", issue: "Lawn maintenance", property: "88 Willow Bend", owner: "Marcus Reed", opened: "Jul 22, 2026", deadline: "Aug 5, 2026", status: "Final Notice" },
      { id: "VIO-276", issue: "Unapproved fence stain", property: "14 Cedar Circle", owner: "Nina Walker", opened: "Jul 18, 2026", deadline: "Aug 12, 2026", status: "In Review" },
      { id: "VIO-268", issue: "Commercial vehicle", property: "208 Oakwood Drive", owner: "Aaron Bell", opened: "Jul 9, 2026", deadline: "Jul 30, 2026", status: "Resolved" },
      { id: "VIO-261", issue: "Exterior lighting", property: "92 Birch Lane", owner: "Rosa Grant", opened: "Jun 29, 2026", deadline: "Jul 19, 2026", status: "Resolved" }
    ],
    events: [
      { month: "AUG", day: "12", title: "Board Meeting", place: "Clubhouse", time: "6:00 PM" },
      { month: "AUG", day: "17", title: "Poolside Movie Night", place: "Community Pool", time: "7:30 PM" },
      { month: "SEP", day: "05", title: "Fall Garage Sale", place: "Community-wide", time: "8:00 AM" }
    ],
    announcements: [
      { title: "Pool deck maintenance", body: "The pool deck will be closed Tuesday morning for seasonal sealing and will reopen at 2:00 PM.", date: "Aug 3, 2026", tag: "Maintenance" },
      { title: "August board packet available", body: "The agenda and supporting documents for next week's board meeting are now in the document library.", date: "Aug 1, 2026", tag: "Board" },
      { title: "Summer social volunteers", body: "Four volunteer spots remain for the neighborhood summer social welcome table.", date: "Jul 29, 2026", tag: "Community" }
    ],
    documents: [
      { name: "August 2026 Board Packet.pdf", folder: "Board Meetings", type: "PDF", size: "4.8 MB", updated: "Aug 1, 2026", owner: "Sarah Mitchell" },
      { name: "Pool Rules and Guest Policy.pdf", folder: "Rules & Policies", type: "PDF", size: "812 KB", updated: "Jul 24, 2026", owner: "Sarah Mitchell" },
      { name: "2026 Operating Budget.xlsx", folder: "Financial", type: "XLSX", size: "246 KB", updated: "Jul 18, 2026", owner: "Elaine Brooks" },
      { name: "Architectural Guidelines.pdf", folder: "Governing Documents", type: "PDF", size: "2.1 MB", updated: "Jun 30, 2026", owner: "ARC Committee" },
      { name: "Greenway Grounds Contract.pdf", folder: "Vendor Contracts", type: "PDF", size: "1.4 MB", updated: "Jun 12, 2026", owner: "Sarah Mitchell" }
    ]
  },
  "willow-creek": {
    id: "willow-creek",
    name: "Willow Creek Condominiums",
    shortName: "Willow Creek",
    type: "Condominium association",
    location: "Stamford, Connecticut",
    address: "440 Willow Creek Road, Stamford, CT 06903",
    established: "2004",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88",
    manager: "Daniel Cho",
    managerEmail: "daniel@havenridgemgmt.com",
    units: 164,
    homeownersCount: 171,
    occupancy: 93,
    collectionRate: 87,
    assessed: 364800,
    collected: 317376,
    outstanding: 33724,
    overdue: 13700,
    openViolations: 9,
    openWorkOrders: 17,
    monthlyCollections: [81, 84, 83, 86, 89, 87],
    amenities: [
      { name: "Fitness center", icon: "dumbbell" },
      { name: "Resident lounge", icon: "sofa" },
      { name: "Covered parking", icon: "car-front" },
      { name: "Walking trail", icon: "trees" }
    ],
    board: [
      { name: "Olivia Bennett", role: "Board President", initials: "OB" },
      { name: "James Wu", role: "Treasurer", initials: "JW" },
      { name: "Fatima Hassan", role: "Secretary", initials: "FH" }
    ],
    homeowners: [
      { name: "Liam Carter", address: "Building A, Unit 204", email: "liam.carter@example.com", phone: "(203) 555-1104", account: "Current", since: "Feb 2020" },
      { name: "Sophia Martinez", address: "Building C, Unit 118", email: "sophia.m@example.com", phone: "(203) 555-1121", account: "Current", since: "May 2017" },
      { name: "Noah Kim", address: "Building B, Unit 305", email: "noah.kim@example.com", phone: "(203) 555-1160", account: "Past Due", since: "Oct 2022" },
      { name: "Ava Thompson", address: "Building D, Unit 401", email: "ava.thompson@example.com", phone: "(203) 555-1182", account: "Current", since: "Jan 2015" },
      { name: "Ethan Price", address: "Building A, Unit 109", email: "ethan.price@example.com", phone: "(203) 555-1195", account: "Current", since: "Apr 2024" }
    ],
    properties: [
      { address: "Building A, Unit 204", owner: "Liam Carter", type: "Two Bedroom", beds: "2 bd / 2 ba", occupancy: "Owner occupied", assessment: 2280, status: "Active" },
      { address: "Building C, Unit 118", owner: "Sophia Martinez", type: "One Bedroom", beds: "1 bd / 1 ba", occupancy: "Owner occupied", assessment: 1920, status: "Active" },
      { address: "Building B, Unit 305", owner: "Noah Kim", type: "Two Bedroom", beds: "2 bd / 2 ba", occupancy: "Tenant occupied", assessment: 2280, status: "Rental" },
      { address: "Building D, Unit 401", owner: "Ava Thompson", type: "Penthouse", beds: "3 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 3120, status: "Active" },
      { address: "Building A, Unit 109", owner: "Ethan Price", type: "One Bedroom", beds: "1 bd / 1 ba", occupancy: "Owner occupied", assessment: 1920, status: "Active" }
    ],
    workOrders: [
      { id: "WO-2094", title: "Elevator call button", location: "Building C, floor 3", vendor: "Metro Lift Services", priority: "Urgent", status: "In Progress", due: "Aug 4, 2026" },
      { id: "WO-2091", title: "Garage exhaust fan", location: "North garage", vendor: "AirFlow Mechanical", priority: "High", status: "Scheduled", due: "Aug 7, 2026" },
      { id: "WO-2087", title: "Hallway carpet repair", location: "Building A, floor 2", vendor: "Fairfield Interiors", priority: "Medium", status: "Open", due: "Aug 11, 2026" },
      { id: "WO-2082", title: "Fitness room faucet", location: "Fitness center", vendor: "Rapid Response Plumbing", priority: "Low", status: "Completed", due: "Aug 1, 2026" },
      { id: "WO-2078", title: "Entry intercom", location: "Building D lobby", vendor: "SecureEntry Systems", priority: "Medium", status: "Completed", due: "Jul 29, 2026" }
    ],
    vendors: [
      { name: "Metro Lift Services", service: "Elevator", contact: "Robin Stein", phone: "(203) 555-1208", contract: "$3,650 / month", status: "Approved", initials: "ML" },
      { name: "AirFlow Mechanical", service: "HVAC", contact: "Omar Davis", phone: "(203) 555-1246", contract: "$1,900 / month", status: "Approved", initials: "AM" },
      { name: "Rapid Response Plumbing", service: "Plumbing", contact: "Chris Long", phone: "(203) 555-1251", contract: "As needed", status: "Approved", initials: "RR" },
      { name: "SecureEntry Systems", service: "Access control", contact: "Tara Lee", phone: "(203) 555-1280", contract: "$980 / month", status: "Review Due", initials: "SS" }
    ],
    payments: [
      { id: "PAY-6291", homeowner: "Sophia Martinez", address: "Building C, Unit 118", method: "ACH", amount: 480, date: "Aug 3, 2026", status: "Paid" },
      { id: "PAY-6288", homeowner: "Ava Thompson", address: "Building D, Unit 401", method: "ACH", amount: 780, date: "Aug 2, 2026", status: "Paid" },
      { id: "PAY-6280", homeowner: "Liam Carter", address: "Building A, Unit 204", method: "Credit card", amount: 570, date: "Aug 1, 2026", status: "Paid" },
      { id: "PAY-6272", homeowner: "Ethan Price", address: "Building A, Unit 109", method: "Check", amount: 480, date: "Jul 30, 2026", status: "Processing" },
      { id: "PAY-6265", homeowner: "Noah Kim", address: "Building B, Unit 305", method: "ACH", amount: 300, date: "Jul 27, 2026", status: "Partial" }
    ],
    violations: [
      { id: "VIO-174", issue: "Balcony storage", property: "Building B, Unit 305", owner: "Noah Kim", opened: "Jul 26, 2026", deadline: "Aug 8, 2026", status: "Open" },
      { id: "VIO-169", issue: "Unregistered vehicle", property: "Building A, Unit 109", owner: "Ethan Price", opened: "Jul 19, 2026", deadline: "Aug 3, 2026", status: "Final Notice" },
      { id: "VIO-163", issue: "Door decoration", property: "Building C, Unit 118", owner: "Sophia Martinez", opened: "Jul 11, 2026", deadline: "Jul 29, 2026", status: "Resolved" },
      { id: "VIO-158", issue: "Quiet hours", property: "Building D, Unit 317", owner: "Henry Scott", opened: "Jul 5, 2026", deadline: "Jul 20, 2026", status: "In Review" },
      { id: "VIO-149", issue: "Hallway item", property: "Building A, Unit 204", owner: "Liam Carter", opened: "Jun 22, 2026", deadline: "Jul 6, 2026", status: "Resolved" }
    ],
    events: [
      { month: "AUG", day: "09", title: "Finance Committee", place: "Resident lounge", time: "5:30 PM" },
      { month: "AUG", day: "15", title: "Fire Alarm Inspection", place: "All buildings", time: "9:00 AM" },
      { month: "AUG", day: "28", title: "Resident Social", place: "Courtyard", time: "6:30 PM" }
    ],
    announcements: [
      { title: "Building C elevator update", body: "Technicians will complete call button repairs Tuesday. The elevator remains available during the work.", date: "Aug 3, 2026", tag: "Service" },
      { title: "Garage cleaning schedule", body: "North garage cleaning begins August 10. Please follow posted temporary parking signs.", date: "Jul 31, 2026", tag: "Parking" },
      { title: "Fitness center access", body: "New mobile access credentials are available through the management office.", date: "Jul 27, 2026", tag: "Amenities" }
    ],
    documents: [
      { name: "August 2026 Finance Packet.pdf", folder: "Board Meetings", type: "PDF", size: "3.2 MB", updated: "Aug 2, 2026", owner: "Daniel Cho" },
      { name: "Resident Parking Map.pdf", folder: "Rules & Policies", type: "PDF", size: "1.8 MB", updated: "Jul 28, 2026", owner: "Daniel Cho" },
      { name: "2026 Reserve Study.pdf", folder: "Financial", type: "PDF", size: "8.4 MB", updated: "Jul 14, 2026", owner: "James Wu" },
      { name: "Declaration and Bylaws.pdf", folder: "Governing Documents", type: "PDF", size: "5.7 MB", updated: "Jun 19, 2026", owner: "Board of Directors" },
      { name: "Metro Lift Service Agreement.pdf", folder: "Vendor Contracts", type: "PDF", size: "1.1 MB", updated: "May 30, 2026", owner: "Daniel Cho" }
    ]
  },
  "harbor-point": {
    id: "harbor-point",
    name: "Harbor Point Townhomes",
    shortName: "Harbor Point",
    type: "Townhome association",
    location: "Milford, Connecticut",
    address: "75 Seaview Avenue, Milford, CT 06460",
    established: "2012",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88",
    manager: "Maya Reynolds",
    managerEmail: "maya@havenridgemgmt.com",
    units: 312,
    homeownersCount: 326,
    occupancy: 98,
    collectionRate: 96,
    assessed: 702000,
    collected: 673920,
    outstanding: 21980,
    overdue: 6100,
    openViolations: 13,
    openWorkOrders: 21,
    monthlyCollections: [88, 90, 91, 94, 95, 96],
    amenities: [
      { name: "Waterfront trail", icon: "waves" },
      { name: "Kayak storage", icon: "warehouse" },
      { name: "Community garden", icon: "sprout" },
      { name: "Dog park", icon: "trees" }
    ],
    board: [
      { name: "Grace Wilson", role: "Board President", initials: "GW" },
      { name: "Robert Chen", role: "Treasurer", initials: "RC" },
      { name: "Nadia Coleman", role: "Secretary", initials: "NC" }
    ],
    homeowners: [
      { name: "Isabella Moore", address: "42 Seaview Avenue", email: "isabella.moore@example.com", phone: "(203) 555-2103", account: "Current", since: "Sep 2018" },
      { name: "Lucas Allen", address: "118 Harbor Walk", email: "lucas.allen@example.com", phone: "(203) 555-2129", account: "Current", since: "Mar 2021" },
      { name: "Mia Robinson", address: "7 Lighthouse Court", email: "mia.robinson@example.com", phone: "(203) 555-2154", account: "Current", since: "Dec 2016" },
      { name: "Benjamin Hall", address: "204 Marina Lane", email: "ben.hall@example.com", phone: "(203) 555-2175", account: "Payment Plan", since: "Jun 2023" },
      { name: "Charlotte Young", address: "66 Seaview Avenue", email: "charlotte.young@example.com", phone: "(203) 555-2198", account: "Current", since: "May 2014" }
    ],
    properties: [
      { address: "42 Seaview Avenue", owner: "Isabella Moore", type: "End-unit Townhome", beds: "3 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 2250, status: "Active" },
      { address: "118 Harbor Walk", owner: "Lucas Allen", type: "Interior Townhome", beds: "2 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 2250, status: "Active" },
      { address: "7 Lighthouse Court", owner: "Mia Robinson", type: "End-unit Townhome", beds: "3 bd / 3 ba", occupancy: "Owner occupied", assessment: 2250, status: "Active" },
      { address: "204 Marina Lane", owner: "Benjamin Hall", type: "Interior Townhome", beds: "3 bd / 2.5 ba", occupancy: "Tenant occupied", assessment: 2250, status: "Rental" },
      { address: "66 Seaview Avenue", owner: "Charlotte Young", type: "End-unit Townhome", beds: "3 bd / 2.5 ba", occupancy: "Owner occupied", assessment: 2250, status: "Active" }
    ],
    workOrders: [
      { id: "WO-3172", title: "Boardwalk handrail", location: "Waterfront trail", vendor: "Shoreline Carpentry", priority: "High", status: "In Progress", due: "Aug 6, 2026" },
      { id: "WO-3168", title: "Storm drain clearing", location: "Marina Lane", vendor: "Coastal Siteworks", priority: "Urgent", status: "Scheduled", due: "Aug 5, 2026" },
      { id: "WO-3160", title: "Dog park gate", location: "North dog park", vendor: "Shoreline Carpentry", priority: "Medium", status: "Open", due: "Aug 10, 2026" },
      { id: "WO-3156", title: "Irrigation controller", location: "Lighthouse Court", vendor: "Tidewater Landscape", priority: "Low", status: "Completed", due: "Aug 1, 2026" },
      { id: "WO-3149", title: "Monument lighting", location: "Main entrance", vendor: "BrightLine Electric", priority: "Medium", status: "Completed", due: "Jul 27, 2026" }
    ],
    vendors: [
      { name: "Tidewater Landscape", service: "Landscaping", contact: "Amelia Hart", phone: "(203) 555-2208", contract: "$6,200 / month", status: "Approved", initials: "TL" },
      { name: "Coastal Siteworks", service: "Drainage", contact: "Ian Murphy", phone: "(203) 555-2231", contract: "As needed", status: "Approved", initials: "CS" },
      { name: "Shoreline Carpentry", service: "Carpentry", contact: "Luis Vega", phone: "(203) 555-2257", contract: "As needed", status: "Approved", initials: "SC" },
      { name: "BrightLine Electric", service: "Electrical", contact: "Theo Martin", phone: "(203) 555-2269", contract: "$1,150 / month", status: "Approved", initials: "BE" }
    ],
    payments: [
      { id: "PAY-7431", homeowner: "Mia Robinson", address: "7 Lighthouse Court", method: "ACH", amount: 562.5, date: "Aug 3, 2026", status: "Paid" },
      { id: "PAY-7428", homeowner: "Isabella Moore", address: "42 Seaview Avenue", method: "Credit card", amount: 562.5, date: "Aug 3, 2026", status: "Paid" },
      { id: "PAY-7420", homeowner: "Lucas Allen", address: "118 Harbor Walk", method: "ACH", amount: 562.5, date: "Aug 2, 2026", status: "Paid" },
      { id: "PAY-7415", homeowner: "Charlotte Young", address: "66 Seaview Avenue", method: "Check", amount: 562.5, date: "Aug 1, 2026", status: "Processing" },
      { id: "PAY-7407", homeowner: "Benjamin Hall", address: "204 Marina Lane", method: "ACH", amount: 400, date: "Jul 29, 2026", status: "Partial" }
    ],
    violations: [
      { id: "VIO-391", issue: "Kayak stored outside rack", property: "118 Harbor Walk", owner: "Lucas Allen", opened: "Jul 28, 2026", deadline: "Aug 9, 2026", status: "Open" },
      { id: "VIO-385", issue: "Unapproved door color", property: "204 Marina Lane", owner: "Benjamin Hall", opened: "Jul 20, 2026", deadline: "Aug 6, 2026", status: "In Review" },
      { id: "VIO-377", issue: "Patio storage", property: "51 Seaview Avenue", owner: "Derek Fox", opened: "Jul 12, 2026", deadline: "Jul 28, 2026", status: "Final Notice" },
      { id: "VIO-369", issue: "Holiday lights", property: "7 Lighthouse Court", owner: "Mia Robinson", opened: "Jul 3, 2026", deadline: "Jul 17, 2026", status: "Resolved" },
      { id: "VIO-361", issue: "Pet waste", property: "66 Seaview Avenue", owner: "Charlotte Young", opened: "Jun 24, 2026", deadline: "Jul 8, 2026", status: "Resolved" }
    ],
    events: [
      { month: "AUG", day: "11", title: "Board Meeting", place: "Marina room", time: "6:30 PM" },
      { month: "AUG", day: "22", title: "Waterfront Cleanup", place: "Trail entrance", time: "9:00 AM" },
      { month: "SEP", day: "06", title: "Community Picnic", place: "Harbor lawn", time: "12:00 PM" }
    ],
    announcements: [
      { title: "High tide advisory", body: "The lower waterfront path may be temporarily closed Wednesday morning during the predicted high tide.", date: "Aug 3, 2026", tag: "Community" },
      { title: "Storm drain service", body: "Crews will work along Marina Lane Thursday. Please keep curb areas clear from 8:00 AM to noon.", date: "Aug 1, 2026", tag: "Maintenance" },
      { title: "Community garden plots", body: "Applications for two available fall garden plots are open through August 14.", date: "Jul 28, 2026", tag: "Amenities" }
    ],
    documents: [
      { name: "August 2026 Board Agenda.pdf", folder: "Board Meetings", type: "PDF", size: "2.6 MB", updated: "Aug 2, 2026", owner: "Maya Reynolds" },
      { name: "Waterfront Trail Guidelines.pdf", folder: "Rules & Policies", type: "PDF", size: "744 KB", updated: "Jul 25, 2026", owner: "Maya Reynolds" },
      { name: "Q2 Financial Statement.pdf", folder: "Financial", type: "PDF", size: "3.1 MB", updated: "Jul 16, 2026", owner: "Robert Chen" },
      { name: "Townhome Design Standards.pdf", folder: "Governing Documents", type: "PDF", size: "4.3 MB", updated: "Jun 28, 2026", owner: "ARC Committee" },
      { name: "Tidewater Landscape Contract.pdf", folder: "Vendor Contracts", type: "PDF", size: "1.6 MB", updated: "Jun 8, 2026", owner: "Maya Reynolds" }
    ]
  }
};

const formatCurrency = (value) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: value % 1 ? 2 : 0
}).format(value);

const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;

const initials = (name) => name
  .replace("&", " ")
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("");

function statusBadge(status) {
  const normalized = status.toLowerCase();
  let tone = "blue";

  if (/paid|current|approved|completed|resolved|active/.test(normalized)) tone = "green";
  if (/partial|scheduled|processing|review|payment plan/.test(normalized)) tone = "amber";
  if (/past due|returned|urgent|final notice/.test(normalized)) tone = "red";
  if (/rental|open|in progress/.test(normalized)) tone = "blue";

  return `<span class="status status--${tone}">${status}</span>`;
}

function metricCard(label, value, note, iconName, tone = "blue") {
  return `
    <article class="metric-card">
      <span class="metric-card__icon metric-card__icon--${tone}">${icon(iconName)}</span>
      <p>${label}</p>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>`;
}

function pageHeader(title, description, actionLabel, actionIcon = "plus") {
  return `
    <header class="page-heading">
      <div>
        <div class="breadcrumb"><a href="dashboard.html">Portfolio</a>${icon("chevron-right")}<span>${title}</span></div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      ${actionLabel ? `<button class="button button--primary" type="button" data-dialog="${actionLabel}">${icon(actionIcon)} ${actionLabel}</button>` : ""}
    </header>`;
}

function tableToolbar(label, statuses = []) {
  return `
    <div class="data-card__header">
      <div>
        <h2>${label}</h2>
        <p>Showing records for the active community</p>
      </div>
      <div class="table-tools">
        <label class="table-search">
          <span class="sr-only">Search ${label.toLowerCase()}</span>
          ${icon("search")}
          <input type="search" placeholder="Search records" data-table-search>
        </label>
        ${statuses.length ? `
          <label class="filter-select">
            <span class="sr-only">Filter by status</span>
            <select data-status-filter>
              <option value="all">All statuses</option>
              ${statuses.map((status) => `<option value="${status.toLowerCase()}">${status}</option>`).join("")}
            </select>
          </label>` : ""}
        <button class="icon-button" type="button" title="Export records" data-toast="Export prepared for download">${icon("download")}</button>
      </div>
    </div>`;
}

function tableFooter(count, noun) {
  return `
    <div class="data-card__footer">
      <span>Showing 1-${count} of ${count} ${noun}</span>
      <div class="pagination" aria-label="Pagination">
        <button type="button" aria-label="Previous page" disabled>${icon("chevron-left")}</button>
        <span>1</span>
        <button type="button" aria-label="Next page" disabled>${icon("chevron-right")}</button>
      </div>
    </div>`;
}

function renderDashboard(community) {
  const completedOrders = community.workOrders.filter((order) => order.status === "Completed").length;
  const openOrders = community.workOrders.length - completedOrders;
  const latestOrders = community.workOrders.slice(0, 4);

  return `
    <section class="dashboard-hero" style="--community-image: url('${community.image}')">
      <div>
        <span class="context-label">${icon("map-pin")} ${community.name}</span>
        <h1>Good morning, Sarah</h1>
        <p>Here is what needs attention across ${community.shortName} today.</p>
      </div>
      <button class="button button--light" type="button" data-dialog="Create announcement">${icon("megaphone")} New announcement</button>
    </section>

    <section class="metric-grid metric-grid--five" aria-label="Community overview">
      ${metricCard("Homeowners", community.homeownersCount, `Across ${community.units} units`, "users", "green")}
      ${metricCard("Properties", community.units, `${community.occupancy}% occupied`, "house", "blue")}
      ${metricCard("Assessments collected", `${community.collectionRate}%`, `${formatCurrency(community.collected)} year to date`, "circle-dollar-sign", "amber")}
      ${metricCard("Open violations", community.openViolations, "Compliance cases", "clipboard-list", "purple")}
      ${metricCard("Open work orders", community.openWorkOrders, `${openOrders} shown in recent activity`, "wrench", "cyan")}
    </section>

    <section class="dashboard-grid dashboard-grid--overview">
      <article class="content-card collection-card">
        <div class="card-heading">
          <div><h2>Assessment collection</h2><p>Year-to-date performance</p></div>
          <button class="icon-button" type="button" title="More options" data-toast="Collection report options">${icon("ellipsis")}</button>
        </div>
        <div class="collection-layout">
          <div class="donut" style="--donut-value: ${community.collectionRate * 3.6}deg">
            <div><strong>${community.collectionRate}%</strong><span>Collected</span></div>
          </div>
          <dl class="legend-list">
            <div><dt><span class="legend-dot legend-dot--green"></span>Collected</dt><dd>${formatCurrency(community.collected)}</dd></div>
            <div><dt><span class="legend-dot legend-dot--amber"></span>Outstanding</dt><dd>${formatCurrency(community.outstanding)}</dd></div>
            <div><dt><span class="legend-dot legend-dot--red"></span>Overdue</dt><dd>${formatCurrency(community.overdue)}</dd></div>
            <div class="legend-list__total"><dt>Total assessed</dt><dd>${formatCurrency(community.assessed)}</dd></div>
          </dl>
        </div>
      </article>

      <article class="content-card">
        <div class="card-heading">
          <div><h2>Collection trend</h2><p>Last six months</p></div>
          <span class="trend-up">${icon("trending-up")} +${Math.max(community.monthlyCollections[5] - community.monthlyCollections[0], 1)}%</span>
        </div>
        <div class="bar-chart" aria-label="Six month collection trend">
          ${community.monthlyCollections.map((value, index) => `
            <div class="bar-chart__item">
              <span>${value}%</span>
              <div><i style="height: ${value}%"></i></div>
              <small>${["Mar", "Apr", "May", "Jun", "Jul", "Aug"][index]}</small>
            </div>`).join("")}
        </div>
      </article>
    </section>

    <section class="dashboard-grid">
      <article class="content-card content-card--flush">
        <div class="card-heading card-heading--padded">
          <div><h2>Recent work orders</h2><p>Latest maintenance activity</p></div>
          <a class="text-link" href="work-orders.html">View all ${icon("arrow-right")}</a>
        </div>
        <div class="table-scroll">
          <table class="compact-table">
            <thead><tr><th>Work order</th><th>Location</th><th>Status</th><th>Due</th></tr></thead>
            <tbody>
              ${latestOrders.map((order) => `
                <tr>
                  <td><span class="table-title">${order.title}</span><small>${order.id}</small></td>
                  <td>${order.location}</td>
                  <td>${statusBadge(order.status)}</td>
                  <td>${order.due}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="content-card">
        <div class="card-heading">
          <div><h2>Upcoming events</h2><p>${community.shortName} calendar</p></div>
          <button class="icon-button" type="button" title="Open calendar" data-toast="Community calendar opened">${icon("calendar-days")}</button>
        </div>
        <div class="event-list">
          ${community.events.map((event) => `
            <div class="event-row">
              <time><span>${event.month}</span><strong>${event.day}</strong></time>
              <div><strong>${event.title}</strong><span>${icon("map-pin")} ${event.place}</span></div>
              <small>${event.time}</small>
            </div>`).join("")}
        </div>
      </article>
    </section>

    <section class="content-card announcement-strip">
      <div class="card-heading">
        <div><h2>Community announcements</h2><p>Recently shared with homeowners</p></div>
        <a class="text-link" href="communications.html">Manage ${icon("arrow-right")}</a>
      </div>
      <div class="announcement-grid">
        ${community.announcements.slice(0, 3).map((item) => `
          <article>
            <span class="announcement-icon">${icon(item.tag === "Maintenance" || item.tag === "Service" ? "wrench" : "megaphone")}</span>
            <div><small>${item.tag} &middot; ${item.date}</small><h3>${item.title}</h3><p>${item.body}</p></div>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderCommunities(community) {
  return `
    ${pageHeader("Community profile", `Management details and operating context for ${community.name}.`, "Edit community", "pencil")}
    <section class="community-profile" style="--community-image: url('${community.image}')">
      <div class="community-profile__content">
        <span class="context-label context-label--light">${icon("building-2")} Active community</span>
        <h2>${community.name}</h2>
        <p>${icon("map-pin")} ${community.location}</p>
      </div>
      <dl class="community-profile__facts">
        <div><dt>Community type</dt><dd>${community.type}</dd></div>
        <div><dt>Established</dt><dd>${community.established}</dd></div>
        <div><dt>Managed units</dt><dd>${community.units}</dd></div>
      </dl>
    </section>
    <section class="metric-grid metric-grid--four">
      ${metricCard("Managed units", community.units, `${community.occupancy}% occupied`, "building", "blue")}
      ${metricCard("Homeowners", community.homeownersCount, "Active contacts", "users", "green")}
      ${metricCard("Collection rate", `${community.collectionRate}%`, "Year to date", "circle-dollar-sign", "amber")}
      ${metricCard("Open requests", community.openWorkOrders + community.openViolations, "Work orders and violations", "inbox", "purple")}
    </section>
    <section class="detail-grid">
      <article class="content-card detail-card">
        <div class="card-heading"><div><h2>Association details</h2><p>Primary community record</p></div>${icon("landmark")}</div>
        <dl class="detail-list">
          <div><dt>Legal name</dt><dd>${community.name} Association, Inc.</dd></div>
          <div><dt>Property address</dt><dd>${community.address}</dd></div>
          <div><dt>Community manager</dt><dd>${community.manager}</dd></div>
          <div><dt>Manager email</dt><dd><a href="mailto:${community.managerEmail}">${community.managerEmail}</a></dd></div>
          <div><dt>Fiscal year</dt><dd>January 1 - December 31</dd></div>
        </dl>
      </article>
      <article class="content-card detail-card">
        <div class="card-heading"><div><h2>Amenities</h2><p>Shared resident facilities</p></div>${icon("trees")}</div>
        <div class="amenity-list">
          ${community.amenities.map((amenity) => `<div><span>${icon(amenity.icon)}</span><strong>${amenity.name}</strong>${icon("check")}</div>`).join("")}
        </div>
      </article>
      <article class="content-card detail-card detail-card--wide">
        <div class="card-heading"><div><h2>Board contacts</h2><p>Current association officers</p></div><button class="text-button" type="button" data-dialog="Message board">Message board</button></div>
        <div class="people-grid">
          ${community.board.map((member) => `
            <div class="person-row"><span class="avatar avatar--soft">${member.initials}</span><div><strong>${member.name}</strong><small>${member.role}</small></div><button class="icon-button" type="button" title="Email ${member.name}" data-toast="Message composer opened">${icon("mail")}</button></div>`).join("")}
        </div>
      </article>
    </section>`;
}

function renderHomeowners(community) {
  const current = community.homeowners.filter((homeowner) => homeowner.account === "Current").length;
  const attention = community.homeowners.length - current;
  return `
    ${pageHeader("Homeowners", `Resident directory and account standing for ${community.name}.`, "Add homeowner", "user-plus")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Total homeowners", community.homeownersCount, `${community.units} managed properties`, "users", "blue")}
      ${metricCard("Owner occupancy", `${community.occupancy}%`, "Community-wide", "key-round", "green")}
      ${metricCard("Accounts current", current, "In displayed records", "badge-check", "cyan")}
      ${metricCard("Needs attention", attention, "In displayed records", "circle-alert", "amber")}
    </section>
    <section class="data-card">
      ${tableToolbar("Homeowners", ["Current", "Past Due", "Payment Plan"])}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Homeowner</th><th>Property</th><th>Contact</th><th>Account</th><th>Resident since</th><th><span class="sr-only">Actions</span></th></tr></thead>
          <tbody>
            ${community.homeowners.map((homeowner) => `
              <tr data-searchable data-status="${homeowner.account.toLowerCase()}">
                <td><div class="identity-cell"><span class="avatar avatar--soft">${initials(homeowner.name)}</span><div><strong>${homeowner.name}</strong><small>Homeowner</small></div></div></td>
                <td><span class="table-title">${homeowner.address}</span></td>
                <td><span class="table-title">${homeowner.email}</span><small>${homeowner.phone}</small></td>
                <td>${statusBadge(homeowner.account)}</td>
                <td>${homeowner.since}</td>
                <td><button class="icon-button" type="button" title="View homeowner" data-toast="Homeowner record opened">${icon("chevron-right")}</button></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.homeowners.length, "homeowners")}
    </section>`;
}

function renderProperties(community) {
  const rentals = community.properties.filter((property) => property.status === "Rental").length;
  return `
    ${pageHeader("Properties", `Property inventory and occupancy for ${community.name}.`, "Add property", "plus")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Total properties", community.units, "Association units", "house", "blue")}
      ${metricCard("Occupied", `${community.occupancy}%`, "Current occupancy", "key-round", "green")}
      ${metricCard("Owner occupied", `${100 - Math.round((rentals / community.properties.length) * 100)}%`, "In displayed records", "user-round-check", "cyan")}
      ${metricCard("Registered rentals", rentals, "In displayed records", "building", "amber")}
    </section>
    <section class="data-card">
      ${tableToolbar("Properties", ["Active", "Rental"])}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Property</th><th>Owner</th><th>Type</th><th>Occupancy</th><th>Annual assessment</th><th>Status</th><th><span class="sr-only">Actions</span></th></tr></thead>
          <tbody>
            ${community.properties.map((property) => `
              <tr data-searchable data-status="${property.status.toLowerCase()}">
                <td><div class="property-cell"><span>${icon("house")}</span><div><strong>${property.address}</strong><small>${property.beds}</small></div></div></td>
                <td>${property.owner}</td>
                <td>${property.type}</td>
                <td>${property.occupancy}</td>
                <td>${formatCurrency(property.assessment)}</td>
                <td>${statusBadge(property.status)}</td>
                <td><button class="icon-button" type="button" title="View property" data-toast="Property record opened">${icon("chevron-right")}</button></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.properties.length, "properties")}
    </section>`;
}

function renderWorkOrders(community) {
  const countByStatus = (status) => community.workOrders.filter((order) => order.status === status).length;
  return `
    ${pageHeader("Work orders", `Maintenance requests, assignments, and progress for ${community.name}.`, "New work order", "plus")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Portfolio open", community.openWorkOrders, "All active requests", "wrench", "blue")}
      ${metricCard("In progress", countByStatus("In Progress"), "Displayed records", "loader-circle", "cyan")}
      ${metricCard("Scheduled", countByStatus("Scheduled"), "Displayed records", "calendar-check", "amber")}
      ${metricCard("Completed", countByStatus("Completed"), "Displayed records", "circle-check-big", "green")}
    </section>
    <section class="data-card">
      ${tableToolbar("Work orders", ["Open", "Scheduled", "In Progress", "Completed"])}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Work order</th><th>Location</th><th>Vendor</th><th>Priority</th><th>Status</th><th>Due date</th><th><span class="sr-only">Actions</span></th></tr></thead>
          <tbody>
            ${community.workOrders.map((order) => `
              <tr data-searchable data-status="${order.status.toLowerCase()}">
                <td><span class="table-title">${order.title}</span><small>${order.id}</small></td>
                <td>${order.location}</td>
                <td>${order.vendor}</td>
                <td><span class="priority priority--${order.priority.toLowerCase()}"><i></i>${order.priority}</span></td>
                <td>${statusBadge(order.status)}</td>
                <td>${order.due}</td>
                <td><button class="icon-button" type="button" title="Open work order" data-toast="Work order opened">${icon("chevron-right")}</button></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.workOrders.length, "work orders")}
    </section>`;
}

function renderVendors(community) {
  const activeContracts = community.vendors.filter((vendor) => vendor.contract !== "As needed").length;
  return `
    ${pageHeader("Vendors", `Approved providers and service agreements for ${community.name}.`, "Add vendor", "briefcase-business")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Approved vendors", community.vendors.length, "Serving this community", "badge-check", "green")}
      ${metricCard("Active contracts", activeContracts, "Recurring agreements", "file-signature", "blue")}
      ${metricCard("Reviews due", community.vendors.filter((vendor) => vendor.status === "Review Due").length, "Insurance or contract review", "calendar-clock", "amber")}
      ${metricCard("Open assignments", community.workOrders.filter((order) => order.status !== "Completed").length, "Displayed work orders", "clipboard-list", "cyan")}
    </section>
    <section class="content-section-heading">
      <div><h2>Community vendor directory</h2><p>Providers assigned to the active community</p></div>
      <label class="table-search">${icon("search")}<span class="sr-only">Search vendors</span><input type="search" placeholder="Search vendors" data-table-search></label>
    </section>
    <section class="vendor-grid">
      ${community.vendors.map((vendor) => `
        <article class="vendor-card" data-searchable data-status="${vendor.status.toLowerCase()}">
          <div class="vendor-card__top"><span class="vendor-logo">${vendor.initials}</span>${statusBadge(vendor.status)}</div>
          <div><span class="eyebrow">${vendor.service}</span><h3>${vendor.name}</h3><p>${vendor.contact} &middot; ${vendor.phone}</p></div>
          <dl><div><dt>Contract</dt><dd>${vendor.contract}</dd></div><div><dt>Open jobs</dt><dd>${community.workOrders.filter((order) => order.vendor === vendor.name && order.status !== "Completed").length}</dd></div></dl>
          <div class="vendor-card__actions"><button class="button button--secondary" type="button" data-toast="Vendor profile opened">View profile</button><button class="icon-button" type="button" title="Email vendor" data-toast="Message composer opened">${icon("mail")}</button></div>
        </article>`).join("")}
    </section>`;
}

function renderPayments(community) {
  const displayedPayments = community.payments.reduce((sum, payment) => sum + payment.amount, 0);
  return `
    ${pageHeader("Payments", `Assessment collections and payment activity for ${community.name}.`, "Record payment", "circle-dollar-sign")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Collected YTD", formatCurrency(community.collected), `${community.collectionRate}% of assessments`, "wallet-cards", "green")}
      ${metricCard("Outstanding", formatCurrency(community.outstanding), "Current receivables", "receipt", "amber")}
      ${metricCard("Overdue", formatCurrency(community.overdue), "Requires follow-up", "circle-alert", "purple")}
      ${metricCard("Recent payments", formatCurrency(displayedPayments), `${community.payments.length} displayed transactions`, "arrow-down-to-line", "blue")}
    </section>
    <section class="data-card">
      ${tableToolbar("Payment activity", ["Paid", "Processing", "Partial", "Returned"])}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Payment</th><th>Homeowner</th><th>Property</th><th>Method</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            ${community.payments.map((payment) => `
              <tr data-searchable data-status="${payment.status.toLowerCase()}">
                <td><span class="table-title">${payment.id}</span></td>
                <td>${payment.homeowner}</td>
                <td>${payment.address}</td>
                <td>${payment.method}</td>
                <td>${payment.date}</td>
                <td><strong>${formatCurrency(payment.amount)}</strong></td>
                <td>${statusBadge(payment.status)}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.payments.length, "payments")}
    </section>`;
}

function renderViolations(community) {
  const resolved = community.violations.filter((violation) => violation.status === "Resolved").length;
  const finalNotices = community.violations.filter((violation) => violation.status === "Final Notice").length;
  return `
    ${pageHeader("Violations", `Compliance cases and follow-up dates for ${community.name}.`, "New violation", "triangle-alert")}
    <section class="metric-grid metric-grid--four">
      ${metricCard("Open cases", community.openViolations, "Community-wide", "triangle-alert", "purple")}
      ${metricCard("Final notices", finalNotices, "Displayed records", "mail-warning", "amber")}
      ${metricCard("In review", community.violations.filter((violation) => violation.status === "In Review").length, "Displayed records", "search-check", "blue")}
      ${metricCard("Recently resolved", resolved, "Displayed records", "circle-check-big", "green")}
    </section>
    <section class="data-card">
      ${tableToolbar("Violation cases", ["Open", "In Review", "Final Notice", "Resolved"])}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Case</th><th>Issue</th><th>Property</th><th>Homeowner</th><th>Opened</th><th>Compliance by</th><th>Status</th></tr></thead>
          <tbody>
            ${community.violations.map((violation) => `
              <tr data-searchable data-status="${violation.status.toLowerCase()}">
                <td><span class="table-title">${violation.id}</span></td>
                <td>${violation.issue}</td>
                <td>${violation.property}</td>
                <td>${violation.owner}</td>
                <td>${violation.opened}</td>
                <td>${violation.deadline}</td>
                <td>${statusBadge(violation.status)}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.violations.length, "cases")}
    </section>`;
}

function renderCommunications(community) {
  return `
    ${pageHeader("Communications", `Announcements and resident outreach for ${community.name}.`, "New message", "send")}
    <section class="message-summary">
      <article><span>${icon("mail-check")}</span><div><strong>${community.homeownersCount}</strong><small>Verified recipients</small></div></article>
      <article><span>${icon("mouse-pointer-click")}</span><div><strong>78%</strong><small>Average open rate</small></div></article>
      <article><span>${icon("megaphone")}</span><div><strong>${community.announcements.length}</strong><small>Active announcements</small></div></article>
      <button class="button button--secondary" type="button" data-dialog="Create announcement">${icon("plus")} Create announcement</button>
    </section>
    <section class="communications-layout">
      <div class="content-card content-card--flush">
        <div class="card-heading card-heading--padded"><div><h2>Published announcements</h2><p>Visible to ${community.shortName} residents</p></div><label class="table-search">${icon("search")}<span class="sr-only">Search announcements</span><input type="search" placeholder="Search" data-table-search></label></div>
        <div class="message-list">
          ${community.announcements.map((item, index) => `
            <article data-searchable>
              <span class="message-list__icon">${icon(index === 0 ? "bell-ring" : "megaphone")}</span>
              <div><div class="message-list__meta"><span class="eyebrow">${item.tag}</span><time>${item.date}</time></div><h3>${item.title}</h3><p>${item.body}</p><small>${icon("users")} All homeowners &middot; Published by ${community.manager}</small></div>
              <button class="icon-button" type="button" title="Announcement options" data-toast="Announcement options opened">${icon("ellipsis-vertical")}</button>
            </article>`).join("")}
        </div>
      </div>
      <aside class="content-card delivery-card">
        <div class="card-heading"><div><h2>Delivery health</h2><p>Last 30 days</p></div>${icon("radio")}</div>
        <div class="delivery-score"><strong>98.4%</strong><span>Successfully delivered</span></div>
        <dl class="detail-list">
          <div><dt>Email</dt><dd>99.1%</dd></div>
          <div><dt>SMS</dt><dd>97.6%</dd></div>
          <div><dt>Portal</dt><dd>100%</dd></div>
        </dl>
      </aside>
    </section>`;
}

function renderDocuments(community) {
  const folders = [
    { name: "Governing Documents", icon: "landmark", count: 12 },
    { name: "Board Meetings", icon: "presentation", count: 24 },
    { name: "Financial", icon: "chart-pie", count: 18 },
    { name: "Vendor Contracts", icon: "file-signature", count: 9 }
  ];
  return `
    ${pageHeader("Documents", `Shared files and association records for ${community.name}.`, "Upload document", "upload")}
    <section class="folder-grid">
      ${folders.map((folder) => `<button type="button" data-toast="${folder.name} folder opened"><span>${icon(folder.icon)}</span><div><strong>${folder.name}</strong><small>${folder.count} files</small></div>${icon("chevron-right")}</button>`).join("")}
    </section>
    <section class="data-card">
      ${tableToolbar("Recent documents")}
      <div class="table-scroll">
        <table>
          <thead><tr><th>Document</th><th>Folder</th><th>Type</th><th>Size</th><th>Updated</th><th>Owner</th><th><span class="sr-only">Actions</span></th></tr></thead>
          <tbody>
            ${community.documents.map((document) => `
              <tr data-searchable>
                <td><div class="document-cell"><span>${icon("file-text")}</span><strong>${document.name}</strong></div></td>
                <td>${document.folder}</td><td>${document.type}</td><td>${document.size}</td><td>${document.updated}</td><td>${document.owner}</td>
                <td><button class="icon-button" type="button" title="Download document" data-toast="Document prepared for download">${icon("download")}</button></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${tableFooter(community.documents.length, "documents")}
    </section>`;
}

function renderReports(community) {
  const reportCards = [
    { title: "Assessment aging", description: "Outstanding balances grouped by aging period.", icon: "circle-dollar-sign", updated: "Updated today" },
    { title: "Budget vs. actual", description: "Year-to-date operating budget performance.", icon: "chart-no-axes-combined", updated: "Updated Aug 1" },
    { title: "Violation summary", description: "Case volume, status, and resolution times.", icon: "clipboard-check", updated: "Updated today" },
    { title: "Work order performance", description: "Response times and vendor completion rates.", icon: "wrench", updated: "Updated today" },
    { title: "Owner directory", description: "Current ownership and contact roster.", icon: "users", updated: "Updated Jul 31" },
    { title: "Vendor spend", description: "Payments and contracts by service category.", icon: "briefcase-business", updated: "Updated Jul 31" }
  ];
  return `
    ${pageHeader("Reports", `Financial and operational reporting for ${community.name}.`, "Create report", "file-plus-2")}
    <section class="report-overview">
      <article class="content-card report-highlight">
        <div><span class="eyebrow">Financial snapshot</span><h2>${community.collectionRate}% collected</h2><p>${formatCurrency(community.collected)} of ${formatCurrency(community.assessed)} assessed year to date.</p></div>
        <div class="progress-ring" style="--progress: ${community.collectionRate * 3.6}deg"><strong>${community.collectionRate}%</strong></div>
      </article>
      <article class="content-card report-kpis">
        <div><span>Outstanding balance</span><strong>${formatCurrency(community.outstanding)}</strong><small>${Math.round((community.outstanding / community.assessed) * 100)}% of assessments</small></div>
        <div><span>Open work orders</span><strong>${community.openWorkOrders}</strong><small>Across ${community.units} units</small></div>
        <div><span>Open violations</span><strong>${community.openViolations}</strong><small>${Math.max(community.openViolations - 4, 1)} awaiting response</small></div>
      </article>
    </section>
    <section class="content-section-heading"><div><h2>Report library</h2><p>Run or download a community-specific report</p></div></section>
    <section class="report-grid">
      ${reportCards.map((report) => `
        <article class="report-card">
          <span>${icon(report.icon)}</span><div><h3>${report.title}</h3><p>${report.description}</p><small>${report.updated}</small></div>
          <button class="icon-button" type="button" title="Run ${report.title}" data-toast="${report.title} report generated">${icon("arrow-up-right")}</button>
        </article>`).join("")}
    </section>`;
}

const pageRenderers = {
  dashboard: renderDashboard,
  communities: renderCommunities,
  homeowners: renderHomeowners,
  properties: renderProperties,
  "work-orders": renderWorkOrders,
  vendors: renderVendors,
  payments: renderPayments,
  violations: renderViolations,
  communications: renderCommunications,
  documents: renderDocuments,
  reports: renderReports
};

function getActiveCommunityId() {
  try {
    const storedId = window.localStorage.getItem("havenridge.activeCommunity");
    return communities[storedId] ? storedId : "oak-ridge";
  } catch {
    return "oak-ridge";
  }
}

function setActiveCommunityId(communityId) {
  try {
    window.localStorage.setItem("havenridge.activeCommunity", communityId);
  } catch {
    // The current page still updates when browser storage is unavailable.
  }
}

function renderNav(activePage) {
  return navItems.map((item) => `
    <a class="sidebar-nav__item${item.id === activePage ? " is-active" : ""}" href="${item.href}"${item.id === activePage ? " aria-current=\"page\"" : ""}>
      ${icon(item.icon)}<span>${item.label}</span>
    </a>`).join("");
}

function renderApplication(communityId = getActiveCommunityId()) {
  const app = document.querySelector("#app");
  const activePage = document.body.dataset.page || "dashboard";
  const community = communities[communityId];
  const renderer = pageRenderers[activePage] || renderDashboard;

  if (!app) return;

  app.innerHTML = `
    <div class="app-shell">
      <aside class="app-sidebar" data-sidebar>
        <div class="sidebar-brand">
          <span class="sidebar-brand__mark">${icon("building-2")}</span>
          <span><strong>Havenridge</strong><small>Property Management</small></span>
          <button class="icon-button sidebar-close" type="button" aria-label="Close navigation" data-sidebar-close>${icon("x")}</button>
        </div>
        <nav class="sidebar-nav" aria-label="Primary navigation">${renderNav(activePage)}</nav>
        <div class="quick-actions">
          <strong>Quick actions</strong>
          <button type="button" data-dialog="New work order">${icon("circle-plus")}<span>New work order</span></button>
          <button type="button" data-dialog="New violation">${icon("triangle-alert")}<span>New violation</span></button>
          <button type="button" data-dialog="Send message">${icon("send")}<span>Send message</span></button>
        </div>
        <div class="sidebar-help"><span>${icon("circle-help")}</span><div><strong>Manager support</strong><small>Weekdays, 8 AM - 6 PM</small></div><button type="button" title="Contact support" data-toast="Support request started">${icon("arrow-up-right")}</button></div>
      </aside>
      <button class="sidebar-scrim" type="button" aria-label="Close navigation" data-sidebar-close></button>

      <div class="app-stage">
        <header class="topbar">
          <button class="icon-button menu-button" type="button" aria-label="Open navigation" data-sidebar-open>${icon("menu")}</button>
          <label class="global-search">
            ${icon("search")}<span class="sr-only">Search active community</span>
            <input type="search" placeholder="Search ${community.shortName}" data-global-search>
            <kbd>/</kbd>
          </label>
          <div class="topbar__actions">
            <label class="community-switcher">
              <span>${icon("building-2")}</span>
              <span class="community-switcher__copy"><small>Active community</small>
                <select data-community-switcher aria-label="Active community">
                  ${Object.values(communities).map((item) => `<option value="${item.id}"${item.id === community.id ? " selected" : ""}>${item.shortName}</option>`).join("")}
                </select>
              </span>
              ${icon("chevrons-up-down")}
            </label>
            <button class="icon-button notification-button" type="button" aria-label="Notifications" data-toast="You have 3 new notifications">${icon("bell")}<span>3</span></button>
            <div class="user-menu"><span class="avatar">SM</span><div><strong>Sarah Mitchell</strong><small>Portfolio Manager</small></div><a href="index.html" title="Sign out" aria-label="Sign out">${icon("log-out")}</a></div>
          </div>
        </header>
        <main class="app-content" id="main-content">${renderer(community)}</main>
        <footer class="app-footer"><span>&copy; 2026 Havenridge Property Management</span><span>${community.name} &middot; Managed by Havenridge</span></footer>
      </div>
    </div>

    <dialog class="app-dialog" data-action-dialog aria-labelledby="dialog-title">
      <form method="dialog" data-action-form>
        <div class="dialog-heading"><span>${icon("sparkles")}</span><div><h2 id="dialog-title">Create record</h2><p>Add the details for this community record.</p></div><button class="icon-button" type="button" aria-label="Close dialog" data-dialog-close>${icon("x")}</button></div>
        <label>Title<input type="text" placeholder="Enter a short title" required></label>
        <label>Details<textarea rows="4" placeholder="Add relevant details"></textarea></label>
        <label>Community<input type="text" value="${community.name}" readonly></label>
        <div class="dialog-actions"><button class="button button--secondary" type="button" data-dialog-close>Cancel</button><button class="button button--primary" type="submit">Save record</button></div>
      </form>
    </dialog>
    <div class="toast" role="status" data-toast-region>${icon("circle-check")}<span>Action complete</span></div>`;

  bindApplicationEvents();
  window.lucide?.createIcons();
}

function showToast(message) {
  const toast = document.querySelector("[data-toast-region]");
  if (!toast) return;
  toast.querySelector("span").textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function bindApplicationEvents() {
  const sidebar = document.querySelector("[data-sidebar]");
  const scrim = document.querySelector(".sidebar-scrim");
  const dialog = document.querySelector("[data-action-dialog]");

  document.querySelector("[data-sidebar-open]")?.addEventListener("click", () => {
    sidebar?.classList.add("is-open");
    scrim?.classList.add("is-visible");
  });

  document.querySelectorAll("[data-sidebar-close]").forEach((button) => {
    button.addEventListener("click", () => {
      sidebar?.classList.remove("is-open");
      scrim?.classList.remove("is-visible");
    });
  });

  document.querySelector("[data-community-switcher]")?.addEventListener("change", (event) => {
    const communityId = event.target.value;
    setActiveCommunityId(communityId);
    renderApplication(communityId);
    showToast(`Switched to ${communities[communityId].name}`);
  });

  document.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });

  document.querySelectorAll("[data-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.dialog;
      dialog.querySelector("#dialog-title").textContent = title;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });

  document.querySelector("[data-action-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    dialog.close();
    showToast("Record saved");
  });

  const filterRecords = () => {
    const searchValue = document.querySelector("[data-table-search]")?.value.trim().toLowerCase()
      || document.querySelector("[data-global-search]")?.value.trim().toLowerCase()
      || "";
    const status = document.querySelector("[data-status-filter]")?.value || "all";

    document.querySelectorAll("[data-searchable]").forEach((record) => {
      const matchesSearch = record.textContent.toLowerCase().includes(searchValue);
      const matchesStatus = status === "all" || record.dataset.status === status;
      record.hidden = !(matchesSearch && matchesStatus);
    });
  };

  document.querySelector("[data-table-search]")?.addEventListener("input", filterRecords);
  document.querySelector("[data-status-filter]")?.addEventListener("change", filterRecords);
  document.querySelector("[data-global-search]")?.addEventListener("input", (event) => {
    const localSearch = document.querySelector("[data-table-search]");
    if (localSearch) localSearch.value = event.target.value;
    filterRecords();
  });

  document.addEventListener("keydown", focusGlobalSearch, { once: true });
}

function focusGlobalSearch(event) {
  if (event.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
    event.preventDefault();
    document.querySelector("[data-global-search]")?.focus();
  }
}

function setupLogin() {
  const passwordToggle = document.querySelector("[data-password-toggle]");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const loginForm = document.querySelector("[data-login-form]");
  const submitButton = loginForm?.querySelector('button[type="submit"]');

  passwordToggle?.addEventListener("click", () => {
    const showPassword = passwordInput.type === "password";
    passwordInput.type = showPassword ? "text" : "password";
    passwordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
    passwordToggle.innerHTML = icon(showPassword ? "eye-off" : "eye");
    window.lucide?.createIcons();
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "dashboard.html";
  });

  const isAutoDemo = new URLSearchParams(window.location.search).get("demo") === "auto";
  if (!isAutoDemo || !emailInput || !passwordInput || !submitButton) return;

  window.setTimeout(() => {
    emailInput.value = "sarah.mitchell@havenridgemgmt.com";
    passwordInput.value = "HavenridgeDemo2026!";
    emailInput.dispatchEvent(new Event("input", { bubbles: true }));
    passwordInput.dispatchEvent(new Event("input", { bubbles: true }));

    window.setTimeout(() => submitButton.click(), 600);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  setupLogin();
  if (document.querySelector("#app")) renderApplication();
  else window.lucide?.createIcons();
});