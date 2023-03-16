#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod error;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![list_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn list_dir(path: &str) -> Result<Vec<String>, error::Error> {
    let files = std::fs::read_dir(path)?;

    Ok(files
        .filter_map(|file| file.ok())
        .map(|file| file.file_name().into_string().unwrap())
        .collect::<Vec<_>>())
}
