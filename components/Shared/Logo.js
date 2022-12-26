
const Logo = ({width,height,color}) => {
    return (
        <>
        <a className="normal-case text-xl">
        <span className="flex items-center gap-2 font-bold text-indigo-900">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="#000"
      version="1.1"
      viewBox="0 0 512.427 512.427"
      xmlSpace="preserve"
      className={`w-${width} h-${height} fill-primary`}
    >
      <path
        d="M502.893 396.948h-54.941l19.102-5.12c1.707-.853 4.267-1.707 5.12-4.267s1.707-4.267.853-6.827l-12.67-47.026c.07-.83.031-1.664-.13-2.467l-8.533-33.28a18.17 18.17 0 00-1.704-2.731l-42.692-158.453c.228-1.166.251-2.368.023-3.51l-8.533-33.28c-.526-1.052-1.377-2.426-2.352-3.527L384.28 51.348c-.853-4.267-5.973-6.827-10.24-5.973l-82.773 22.187c-4.267.853-6.827 5.973-5.973 10.24l18.404 68.485a50.721 50.721 0 00-22.671-5.339H33.56c-3.413 0-5.973 1.707-7.68 5.12-1.707 2.56-1.707 5.973 0 8.533l10.24 16.213c7.68 13.653 7.68 29.867 0 43.52l-7.545 11.947H7.96c-3.413 0-5.973 1.707-7.68 5.12-1.707 2.56-1.707 5.973 0 8.533l10.24 16.213c7.68 13.653 7.68 29.867 0 43.52L.28 315.882c-1.707 2.56-1.707 5.973 0 8.533s4.267 4.267 7.68 4.267h20.076l8.084 12.8c7.68 13.653 7.68 29.867 0 43.52l-7.545 11.947H7.96c-5.12 0-8.533 3.413-8.533 8.533v51.2c0 5.12 3.413 8.533 8.533 8.533h494.933c5.12 0 8.533-3.413 8.533-8.533v-51.2c.001-5.12-3.413-8.534-8.533-8.534zm-210.59-84.058c8.853-9.215 14.323-21.7 14.323-35.409s-5.47-26.194-14.323-35.409c12.984-2.949 24.135-10.859 31.324-21.623l29.419 109.472 7.34 28.627c.198.395.42.778.661 1.147l10.011 37.253h-51.961c8.15-9.076 13.129-21.05 13.129-34.133.001-24.287-17.143-44.751-39.923-49.925zm95.39-183.035l-65.707 17.92-4.267-16.213 65.707-17.92 4.267 16.213zm4.57 16.156l39.228 148.419-65.994 17.689-33.635-125.96a50.644 50.644 0 00-3.758-14.072l-2.089-7.824 66.248-18.252zm-21.636 182.671l65.426-16.994 4.285 16.212-65.444 17.849-4.267-17.067zm17.066 66.56l-8.951-33.52 65.868-17.655 8.79 33.255-65.707 17.92zM370.627 64.148l8.501 32.163-66.498 17.824-8.563-32.067 66.56-17.92zm-320 97.28l-1.707-3.413h232.107c14.067 0 26.217 8.625 31.425 20.847l2.436 9.064c.173 1.385.272 2.792.272 4.222 0 18.773-15.36 34.133-34.133 34.133H48.92l1.707-3.413c11.093-18.773 11.093-42.666 0-61.44zm-25.6 85.334l-1.707-3.413h232.107c18.773 0 34.133 15.36 34.133 34.133 0 18.773-15.36 34.133-34.133 34.133H23.32l1.707-3.413c11.093-18.774 11.093-42.667 0-61.44zm25.6 85.333l-1.707-3.413h232.107c18.773 0 34.133 15.36 34.133 34.133 0 18.773-15.36 34.133-34.133 34.133H48.92l1.707-3.413c11.093-18.773 11.093-42.667 0-61.44zM494.36 448.148H16.493v-34.133h477.868v34.133z"
        transform="translate(1 1)"
      ></path>
      <path
        d="M93.293 371.348h187.733c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H93.293c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533zM67.693 286.015h187.733c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533H67.693c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533zM93.293 200.682h187.733c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H93.293c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533zM357.827 182.762l26.453 98.987c1.707 3.413 5.12 5.973 8.533 5.973 0 0 .853 0 1.707-.853 4.267-.853 6.827-5.973 5.973-10.24l-26.453-98.133c-.853-4.267-5.973-6.827-10.24-5.973s-6.827 5.972-5.973 10.239z"
        transform="translate(1 1)"
      ></path>
    </svg>
    <span className={`${color} hidden md:block logo-title` }>
    Books Society
      </span> 
        </span>
          
           </a>
                
        </>
    );
};

export default Logo;