export function MeetingRoomDialog({open}: {open: any}) {
    return (
        <dialog className="Dialog" open={open}>
            <h2 className="DialogTitle">
                회의방 추가하기
            </h2>
        </dialog>
    )
}