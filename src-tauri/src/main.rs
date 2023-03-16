#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![list_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn list_dir(path: &str) -> Option<Vec<String>> {
    match std::fs::read_dir(path) {
        Ok(files) => Some(
            files
                .into_iter()
                .map(|v| {
                    let file_name = v.unwrap().file_name();
                    let val = file_name.as_os_str().to_str().unwrap_or("");
                    val.to_string()
                })
                .collect::<Vec<_>>(),
        ),
        Err(_) => None,
    }
}
