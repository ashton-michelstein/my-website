"use client"

import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import Cursor from '@/components/Cursor'

export default function AdminPage() {
    return ( <>
    <Cursor/>
    <NextStudio config = {config} />
    </>
    )
}