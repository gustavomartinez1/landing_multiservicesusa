import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { contactFormSchema } from '@/shared/lib/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the data
    const validatedData = contactFormSchema.parse(body)

    // In a real application, you would send an email here
    // For now, we'll just log and return success
    console.log('Contact form submission:', validatedData)

    // TODO: Integrate with Resend or another email service
    // await sendEmail(validatedData)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid data', errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}