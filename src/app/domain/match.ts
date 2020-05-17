export interface Match {
    match_id: String;
    display_name: String;
    age: number;
    height_in_cm: number;
    job_title: String;
    religion: String;
    main_photo: String;
    compatibility_score: number;
    contacts_exchanged: number;
    favourite: Boolean;
}

export interface City {
    name: String;
    lat: number;
    lon: number;
}
