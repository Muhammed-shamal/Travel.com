import Image from 'next/image'
import React from 'react'

function ChatMessageUI() {
    return (
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
            <div class="shrink-0">
                <Image class="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
            </div>
        </div>
    )
}

export default ChatMessageUI