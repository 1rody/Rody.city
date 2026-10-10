function showInformation(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const project = event.currentTarget.querySelector(".information");

    if (!project) return;

    project.classList.toggle("hidden");
}

export default showInformation;