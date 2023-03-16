#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn paths(path: &str) -> Vec<String> {
    let files = std::fs::read_dir(path)
        .unwrap()
        .into_iter()
        .map(|v| {
            let file_name = v.unwrap().file_name();
            let val = file_name.as_os_str().to_str().unwrap_or("");
            val.to_string()
        })
        .collect::<Vec<_>>();

    files
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![paths])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
